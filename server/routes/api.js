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

router.post("/login", async(req, res)=> {
	const email = req.body.mail
	const password = req.body.password
	
	const profil = await client.query({
		text: 'SELECT * FROM users WHERE mail =$1',
		values:[mail]
	})
	
	if (profil.row.length === 0) {
		res.status(401).json({
			message:"Cet utilisateur n'existe pas"
		})
		return
	}

	const user= profil.rows[0]

	if (await bcrypt.compare(password, user.password)) {
		req.session.userId = user.id
		res.json({
			id: user.id,
			email: user.mail
		})
	} else {
		res.status(401).json({
			message:"Mauvais mot de passe"
		})
		return
	}
});

router.post("/logout", function (req, res, next) {
	res.status(500);
	res.send({ message: "Not implemented" });
});

router.post("/register", function (req, res, next) {
	res.status(500);
	res.send({ message: "Not implemented" });
});

module.exports = router;
