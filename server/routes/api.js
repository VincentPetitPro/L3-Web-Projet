const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const { Client } = require("pg");
const client = new Client({
	user: "postgres",
	host: "localhost",
	password: "159753",
	database: "Projet",
});
client.connect();

router.post("/login", function (req, res, next) {
	res.status(500);
	res.send({ message: "Not implemented" });
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
