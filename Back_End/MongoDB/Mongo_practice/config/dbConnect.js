const mongoose = require('mongoose')

const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDb Database Conncted ")
    } catch (err) {
        console.log("MongoDb Database Not Conncted Check ", err)
    }
}

module.exports = ConnectDB