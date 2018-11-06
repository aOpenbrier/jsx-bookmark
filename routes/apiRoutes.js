const books = require('../data/booklist')

module.exports = function (app) {
    // read all books
    app.get('/books', (req, res) => {
        res.json(books.getBooks())
    })
    // read book  
    app.get('/books/:id', (req, res) => {
        res.json(books.getBook(req.params.id))
    })
    // create book
    app.post('/books', (req, res) => {
        console.log('post book' + req.body)
        books.addBook(req.body)
        res.sendStatus(200)
    })
    // update book
    app.put('/books/:id', (req, res) => {
        books.updateBook(req.params.id, req.body)
        res.sendStatus(200)
    })
    // delete book
    app.delete('/books/:id', (req, res) => {
        books.deleteBook(req.params.id)
        res.sendStatus(200)
    })
}