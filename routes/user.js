const express = require('express');
const router = express.Router();
const {
    login,
    register,
    dashboard
} = require('../controllers/userController');

router.get("/login", login)
router.get("/register", register)
router.get("/dashboard", dashboard);

module.exports = router