import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import arrayRoute from './routes/arrayRoute.js'

dotenv.config();

const PORT = process.env.PORT || 5000

const app = express();

app.use(cors())

app.use(express.json())

app.use('/api/createArray', arrayRoute)

app.listen(PORT, () => {
    console.log(`server created http://localhost:${PORT}`)
})


// http://localhost:5000//api/createArray/