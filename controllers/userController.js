const User = require('../models/User')
const bcrypt = require("bcryptjs");
const passport = require("passport");


const loginPage = (req, res) => {
    res.render("login")
}
const registerPage = (req, res) => {
    res.render("register")
}
const register = async (req, res) => {
    const { name, email, password, password2 } = req.body;
    let errors = [];
    if (!name || !email || !password || !password2) {
        errors.push({ msg: 'Please enter all fields' });
    }
    if (password != password2) {
        errors.push({ msg: 'Passwords do not match' });
    }
    if (password.length < 6) {
        errors.push({ msg: 'Password must be at least 6 characters' });
    }
    if (errors.length > 0) {
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        });
    } else {
        try {
            const user = await User.findOne({ email: email })
            if (user) {
                console.log("not");
                errors.push({ msg: 'Email already exists' });
                res.render('register', {
                    errors,
                    name,
                    email,
                    password,
                    password2
                });
            } else {
                const newUser = new User({ name: name, email: email, password: password });
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save().then(() => {
                            req.flash("success_msg", "you are now registered and can log in :)")
                            res.redirect("/users/login");
                        }).catch((err) => console.log(err));
                    });
                });
            }

        } catch (error) {
            console.log(error);
        }
    }
}

// login handel
const login = (req, res, nxt) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, nxt);
}
const logout = (req, res) => {
    req.logout((err) => { if (err != undefined) console.log(err) });
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
}

module.exports = {
    logout,
    login,
    loginPage,
    register,
    registerPage,
}