import express, { json } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import handler from './routes/route.js'

dotenv.config();

const PORT = process.env.PORT || 5000

const app = express();

app.use(cors())

app.use('/api/storeData', handler)

app.use(express.json())

app.listen(() => {
    console.log(`server created successfully http://localhost:${PORT}`)
})




