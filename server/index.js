const express = require('express')
const data = require('./db.json')
const app = express();
const PORT = 3001;

app.use(express.static('../client/build'))

app.get('/', (req,res) => {
    
})

app.get('/books', (req,res) => {
    res.json(data)
})

app.listen(PORT, (req, res) => {
    console.log(`Server running in port ${PORT}`)
})