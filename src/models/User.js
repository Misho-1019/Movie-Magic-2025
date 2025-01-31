import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    email: String,
    password: String,
})

userSchema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password) 
})

const User = model('User', userSchema)

export default User;