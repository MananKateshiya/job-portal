import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter username"]
    },
    email: {
        type: String,
        required: [true, "Enter username"]
    },
    password: {
        type: String,
        required: [true, "Enter username"]
    },
},
    {
        timestamps: true
    })


export const UserModel = mongoose.models.User || mongoose.model('User', UserSchema);
