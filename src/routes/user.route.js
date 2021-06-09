const { Router } = require('express')
const userController = require('../controllers/user.controller')

const api = Router()

api.get('/users', userController.getUsers)
api.post('/users', userController.createUser)

module.exports = api