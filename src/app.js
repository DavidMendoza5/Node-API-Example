const express = require('express')
const { createConnection } = require('typeorm')
const bodyparser = require('body-parser')

const app = express()
createConnection()

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const userRoutes = require('./routes/user.route')

app.use(userRoutes)

module.exports = app