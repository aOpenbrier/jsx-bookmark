const books = require('../data/booklist')
module.exports = app => {
    app.get('/', (req, res) => res.render('index.jsx'))
    app.get('/form', (req, res) => res.render('form.jsx'))
    app.get('/formEdit/:id', (req, res) => res.render('formEdit.jsx', books.getBook(req.params.id)))
    app.get('/list', (req, res) => res.render('list.jsx', books.getBooks() ))

}