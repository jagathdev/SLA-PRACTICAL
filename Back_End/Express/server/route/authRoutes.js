import express from 'express'
import userController from '../userController/userController'

const route = express.Router()

route.post('/auth', userController)

export default route