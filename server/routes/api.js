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
