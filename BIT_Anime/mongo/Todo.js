import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title: {type: String, required: false, default: "Date and Time"},
    desc: {type: String, required:true}
});

export const Todo = mongoose.model('Todo', TodoSchema);
