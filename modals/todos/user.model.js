import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique : true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min : [6, "Password must be at least 6 characters long"],
        max : [12, "Password must be at most 12 characters long"]
    }
}, {timestamps : true});

export const User = mongoose.model("User", userSchema);