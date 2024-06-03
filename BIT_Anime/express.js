const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const fs = require("fs")
// Serve static files from the "public" directory
app.use(express.static('public'))
app.use((req, res, next) => {
    console.log(req.headers)
    req.harry = "Access at";
    let date = Date.now();
    fs.appendFileSync("logs.txt", `${Date(date)} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    next()
})
// Route to serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'BIT_Anime.html'))
})
app.get('/about',(req, res) => {
    res.send('Its About BIT_Anime')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
