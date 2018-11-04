module.exports = app => {
    
    app.get('/', (req, res) => res.render('index.jsx'))
    app.get('/form', (req, res) => res.render('form.jsx'))
    app.get('/list', (req, res) => res.render('list.jsx'))

}