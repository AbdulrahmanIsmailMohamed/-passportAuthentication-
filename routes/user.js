const express = require('express');
const router = express.Router();
const {
    login,
    register,
    dashboard,
    registerPage
} = require('../controllers/userController');

router.get("/login", login)
router.route("/register").get(registerPage).post(register)
router.get("/dashboard", dashboard);

module.exports = router