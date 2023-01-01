const login = (req, res) => {
    res.render("login")
}
const register = (req, res) => {
    res.render("register")
}
const dashboard = (req, res) => {
    res.render("dashboard")
}
const welcome = (req, res) => {
    res.render("welcome")
}

module.exports = {welcome}