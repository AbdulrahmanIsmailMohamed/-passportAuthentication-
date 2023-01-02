const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const db = require("./db/connect");
const index = require("./routes/index");
const user = require("./routes/user");
const app = express();
const session = require("express-session")
const flash = require("connect-flash");
const passport = require("passport");

// passport config
require("./config/passport")(passport)

// ejs
app.use(expressLayouts)
app.set("view engine", "ejs")

// express body pareser
app.use(express.urlencoded({ extended: true }))

// session
app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);

// passport middleWare
app.use(passport.initialize());
app.use(passport.session());

// connect-flash
app.use(flash())

// glopal vrs
app.use((req, res, nxt) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    nxt();
});


// routes
app.get('/', (req, res) => {
    res.redirect('/welcome')
})
app.use('/', index)
app.use('/users', user)

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server running on ${PORT}...`));