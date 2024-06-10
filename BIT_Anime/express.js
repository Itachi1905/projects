import mongoose from "mongoose";
import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { Todo } from "./mongo/Todo.js";
import fs from "fs";

// Connect to MongoDB
async function connectDB() {
    await mongoose.connect("mongodb://localhost:27017/logs");
}

connectDB().catch(err => console.log(err));

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

app.use((req, res, next) => {
    console.log(req.headers);
    req.harry = "Access at";
    let date = new Date();
    fs.appendFileSync("logs.txt", `${date} is a ${req.method}\n`);
    console.log(`${Date.now()} is a ${req.method}`);

    const newTodo = new Todo({ desc: `${date}` });
    newTodo.save().catch(err => console.log(err));

    next();
});

// Workaround to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Route to serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'BIT_Anime.html'));
});

app.get('/about', (req, res) => {
    res.send('Its About BIT_Anime');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
