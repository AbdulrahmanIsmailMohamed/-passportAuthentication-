const login = (req, res) => {
    res.render("login")
}
const register = (req, res) => {
    res.render("register")
}
const dashboard = (req, res) => {
    res.render("dashboard")
}
module.exports = {
    login,
    register,
    dashboard,
}