const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// Serve static files from the "public" directory
app.use(express.static('public'))

// Route to serve the main HTML file
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'BIT_Anime.html'))
})
app.get('/about',(req, res) => {
    res.send('Its About BIT_Anime')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
