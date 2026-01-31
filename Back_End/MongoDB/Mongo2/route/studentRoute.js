import express from 'express'
import { studentCreate } from '../controller/studentCreate.js'

const Route = express.Router()

Route.post('/newStudent', studentCreate)

export default Route

