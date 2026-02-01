import mongoose from "mongoose";

const CONNECTDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
    } catch (error) {
        console.error(error)
    }
}

export default CONNECTDB;
