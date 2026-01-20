import express from 'express'

import dotenv from 'dotenv'
import route from './route/authRoutes';

dotenv.config()

const app = express();

// simple Route

app.get("/api", (req, res) => {

})

// // Perameter Route
// app.get("/api/:name", (req, res) => {

// })

app.use("/api/users", route)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`server Start http://localhost/${PORT}`)
})

