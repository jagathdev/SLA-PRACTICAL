const express = require('express')
const createEmployee = require('../controllers/offficeController.js')

const Route = express()

Route.post('createEmp', createEmployee)

module.exports = Route


