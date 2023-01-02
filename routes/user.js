const express = require('express');
const router = express.Router();
const {
    login,
    loginPage,
    register,
    registerPage,
    logout
} = require('../controllers/userController');

router.route("/login").get(loginPage).post(login)

router.route("/register").get(registerPage).post(register)

router.get("/logout",logout)
module.exports = router