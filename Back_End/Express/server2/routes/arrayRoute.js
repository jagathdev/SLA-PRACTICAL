import express from 'express'
import { arrayControler, getData } from '../controllers/arrayControler.js';

const arrayCreate = express.Router()

arrayCreate.post('/create', arrayControler)
arrayCreate.get('/getData', getData)

export default arrayCreate;


