const User = require('../models/User')

const login = (req, res) => {
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
                newUser.save()
                console.log(newUser);
                res.send("all done!!")
            }

        } catch (error) {
            console.log(error);
        }
    }

}
const dashboard = (req, res) => {
    res.render("dashboard")
}
module.exports = {
    login,
    register,
    registerPage,
    dashboard,
}