import express from 'express'
import dotenv from 'dotenv'
import route from './route/route.js'
import cors from 'cors'

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()

app.use('/api/create', route)

app.use(cors())

app.use(express.json)

app.listen(PORT, () => {
    console.log(`Server Created http:/localhost:${PORT}`)
})

// http:/localhost:5000/api/create/endurl