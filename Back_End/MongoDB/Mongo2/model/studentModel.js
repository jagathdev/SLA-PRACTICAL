import mongoose from 'mongoose'

const stuShema = new mongoose.Schema({
    name: { type: String, require: true, trim: true },
    age: { type: Number },
    email: { type: String,unique:true }
})