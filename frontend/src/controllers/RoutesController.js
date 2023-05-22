exports.renderLogin = (req, res) => {
    res.render('login')
}
exports.renderDashboard = (req, res) => {
    const { username } = req.user
    res.render('dashboard', { username })
}