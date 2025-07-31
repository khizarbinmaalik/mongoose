import mongoose from "mongoose";
import { Schema } from "mongoose";

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        max : [250, "Description must be at most 250 characters long"]
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    }
}, {timestamps : true});

export const Todo = mongoose.model("Todo", todoSchema);