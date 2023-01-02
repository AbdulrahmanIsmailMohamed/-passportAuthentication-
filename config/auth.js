module.exports = {
    ensureAuthenticated: (req, res, nxt) => {
        if (req.isAuthenticated()) {
            return nxt();
        }
        req.flash('error_msg', 'Please log in to view that resource');
        res.redirect('/users/login');
    },
    forwardAuthenticated: (req, res, nxt) => {
        if (!req.isAuthenticated()) {
            return nxt();
        }
        res.redirect('/dashboard');
    }
};