const routes = require('express').Router()
const RoutesController = require('./controllers/RoutesController')
const UserController = require('./controllers/UserController')
const checkAuth = require('./middlewares/checkAuth')
const checkRoutes = require('./middlewares/checkRoutes')

routes.get('/', checkRoutes, RoutesController.renderLogin)
routes.get('/login', checkRoutes, RoutesController.renderLogin)
routes.get('/dashboard', checkAuth, RoutesController.renderDashboard)

routes.get('/logout', UserController.logout)
routes.post('/login', UserController.login)
routes.post('/addProducao', UserController.addProducao)

module.exports = routes