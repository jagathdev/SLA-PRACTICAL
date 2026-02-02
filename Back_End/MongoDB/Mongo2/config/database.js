import mongoose from "mongoose";

const CONNECTDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDb Connected")

    } catch (error) {
        console.error("error", error)
    }
}

export default CONNECTDB;
