const welcome = (req, res) => {
    res.render("welcome")
}

const dashboard = (req, res) => {
    res.render('dashboard', {
        user: req.user
    })
}
module.exports = {
    welcome,
    dashboard
}