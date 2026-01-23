import express from 'express'
import { arrayControler } from '../controllers/arrayControler.js';

const arrayCreate = express.Router()

arrayCreate.post('/create', arrayControler)

export default arrayCreate;


