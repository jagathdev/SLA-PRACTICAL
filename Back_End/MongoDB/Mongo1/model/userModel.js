import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    role: { type: String },
    age: { type: Number, max: 60, min: 18 },
    createdBy: { type: String, default: 'Admin' }
}, { timestamps: true })

const Users = mongoose.model('usersData', userSchema)

export default Users;

