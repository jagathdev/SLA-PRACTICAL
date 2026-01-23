import express from 'express'
import { create } from '../controllers/arrayControler.js'

const arrayRoute = express.Router()

// API List

// 1. http://localhost:5000//api/createArray/array


arrayRoute.post('/array', create)


export default arrayRoute;

