import mongoose from "mongoose";


const DBCONNECT = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL)
    } catch (error) {

    }
}

