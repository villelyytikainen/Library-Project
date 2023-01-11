const express = require('express')
const fs = require('fs')
const data = require('./db.json')
const app = express();
const PORT = 3001;

app.use(express.static('../client/build'))

app.get('/', (req,res) => {

})

app.get('/books', (req,res) => {
    let index = 0;
    data.books.map(book => {
        book.id = index+1
        index++;
    })
    res.json(data)
})

app.get('/books/:id', (req,res) => {
    const id = Number(req.params.id)
    console.log(data.books)
    const book = data.books.find(book => book.id === id)
    res.json(book)
})

app.post('/books',(req,res) => {
    if(fs.existsSync('db.json'))
    {
        fs.readFile('db.json', (err,data) => {
            if(err)
                console.log(err)
            else
            {
                obj = JSON.parse(data);
                console.log(req)
            }
        })
    }
    res.send('napa')
})

app.delete('/books/:id', (req,res) => {
    const id = Number(req.params.id);
    const newData = data.books.filter(book => book);
    console.log(newData)
})

app.listen(PORT, (req, res) => {
    console.log(`Server running in port ${PORT}`)
})