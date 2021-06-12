const { Router } = require('express')
const userController = require('../controllers/user.controller')

const api = Router()

api.get('/users', userController.getUsers)
api.get('/users/:id', userController.getUserById)
api.post('/users', userController.createUser)
api.put('/users/:id', userController.updateUser)
api.delete('/users/:id', userController.deleteUser)

module.exports = api