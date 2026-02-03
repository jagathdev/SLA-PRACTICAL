import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number },
    email: { type: String, unique: true },
    mobile: { type: Number, unique: true }

})

const StuModel = mongoose.model("studentDatas", studentSchema)

export default StuModel