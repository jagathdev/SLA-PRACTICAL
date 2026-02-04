import express from 'express'
import { userCreate, userCheck,userShow } from '../controllers/userControllers.js'

const userRoute = express()

userRoute.post('/userCreate', userCreate)
userRoute.post('/checkUser', userCheck)
userRoute.get('/showUser', userShow)

export default userRoute;




