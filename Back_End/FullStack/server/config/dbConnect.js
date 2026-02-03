import mongoose from "mongoose"
const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MONGO DB CONNECTED")
    } catch (error) {
        console.log("Error Check Connection", error)
    }
}


export default dbConnect