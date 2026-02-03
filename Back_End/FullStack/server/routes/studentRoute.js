import express from 'express'
import { stuCreate } from '../controllers/StudentControllers.js'

const Route = express()

Route.post('/createStudent', stuCreate)

export default Route