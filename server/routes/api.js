const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { Client } = require("pg");
const config = require("../../config.json");

const client = new Client({
	user: config.user,
	host: config.host,
	password: config.password,
	database: config.database,
});
client.connect();

//connexion au profil
router.post("/login", async (req, res) => {
	const mail = req.body.mail;
	const password = req.body.password;

	const profil = await client.query({
		text: "SELECT * FROM users WHERE mail =$1",
		values: [mail],
	});

	if (profil.row.length === 0) {
		res.status(401).json({
			message: "Cet utilisateur n'existe pas",
		});
		return;
	}

	const user = profil.rows[0];

	if (await bcrypt.compare(password, user.password)) {
		req.session.userId = user.id;
		res.json({
			id: user.id,
			mail: user.mail,
		});
	} else {
		res.status(401).json({
			message: "Mauvais mot de passe",
		});
		return;
	}
});

//création du profil
router.post("/register", async (req, res) => {
	const mail = req.body.mail;
	const password = req.body.password;
	const username = req.body.username;

	const profil = await client.query("SELECT * FROM users WHERE mail =$1", [mail]);

	if (profil.rows.length > 0) {
		res.status(401).json({
			message: " utilisateur déjà existant",
		});
		return;
	}

	const hash = await bcrypt.hash(password, 10);

	await client.query("INSERT INTO users(mail,password,username) VALUES($1, $2, $3)", [
		mail,
		hash,
		username,
	]);
	res.send("ok");

	const user = {
		mail: mail,
		username: username,
	};
	res.status(200).json({ message: "Votre inscription a été pris en compte" });
});

router.get("/me", async (req, res) => {
	if (typeof req.session.userId === "undefined") {
		res.status(401).json({ message: "not connected" });
		return;
	}

	const result = await client.query({
		text: "SELECT id, mail FROM users WHERE id=$1",
		values: [req.session.userId],
	});

	res.json(result.row[0]);
});

router.post("/article", async (req, res) => {
	const name = req.body.name;
	const content = req.body.content;
	const image = req.body.img;
	const author = req.body.author;

	if (
		typeof name !== "string" ||
		name === "" ||
		typeof content !== "string" ||
		content === "" ||
		typeof image !== "string" ||
		content === "" ||
		typeof author !== "string" ||
		content === ""
	) {
		res.status(400).json({ message: "bad request" });
		return;
	}

	const result = await client.query({
		text: "INSERT INTO articles(name, content, image, author) VALUES ($1, $2, $3, $4) RETURNING *",
		values: [name, content, image, author],
	});
	const id = result.rows[0].id;

	res.json({
		id: id,
		name: name,
		content: content,
		image: image,
		author: author,
	});
});

module.exports = router;
