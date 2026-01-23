import express, { json } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import arrayCreate from './routes/arrayRoute.js'


dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())

app.use(cors())

app.use('/api/createArray', arrayCreate)

app.listen(PORT, () => {
    console.log(`server created successfull http://localhost:${PORT}`)
})

// http://localhost:5000/api/createArray/create

