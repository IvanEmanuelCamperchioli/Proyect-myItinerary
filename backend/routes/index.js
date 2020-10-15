const express = require('express')
const routes = express.Router() 
const citiesController = require('../controllers/citiesController')
const itinerController = require('../controllers/itinerController')
const activitiesController = require('../controllers/activitiesController')
const userController = require('../controllers/userController')
const validator = require('../config/validator')
const passport = require('../config/passport')

routes.route('/cities')
.get(citiesController.ciudades)
.post(citiesController.cargarCiudad)

routes.route('/cities/:id')
.get(citiesController.getImgById)

routes.route('/itineraries')
.post(itinerController.loadItineraries)

routes.route('/itineraries/:id')
.get(itinerController.getItinerariesById)
.put(itinerController.putComment)

routes.route('/comments/:id')
.delete(itinerController.deleteComment)

routes.route('/activities')
.post(activitiesController.loadActivities)

routes.route('/activities/:id')
.get(activitiesController.getActivities)

routes.route('/user')
.post(validator.validateData, userController.loadUser)

routes.route('/login')
.post(userController.loginUser)

routes.route('/tokenLS')
.get(passport.authenticate('jwt', {session: false}), userController.tokenLSvalidate)

module.exports = routes