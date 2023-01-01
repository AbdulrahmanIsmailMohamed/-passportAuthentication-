const express = require("express");
const { welcome } = require("../controllers/indexController");
const router = express.Router();

router.get("/welcome", welcome)

module.exports = router