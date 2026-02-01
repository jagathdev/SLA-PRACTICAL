const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const createEmp = require('./routes/officeRoute.js')
const ConnectDB = require('./config/dbConnect.js')

dotenv.config()

const PORT = process.env.PORT

const app = express()

app.use('api/employee', createEmp)

app.use(cors())

app.use(express.json())

ConnectDB

app.listen(PORT, () => {
    console.log(`Server Connected http://localhost:${PORT}`)
})
