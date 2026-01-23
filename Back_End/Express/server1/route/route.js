import express from 'express'
import { controller } from '../contoller/controller.js'

const route = express.Router()

route.post("/endurl", controller)

export default route;
