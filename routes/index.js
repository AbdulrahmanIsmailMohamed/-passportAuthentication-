const express = require("express");
const { ensureAuthenticated } = require("../config/auth");
const { welcome, dashboard } = require("../controllers/indexController");
const router = express.Router();

router.get("/welcome", welcome)

// Dashboard
router.get('/dashboard', ensureAuthenticated,dashboard);

module.exports = router