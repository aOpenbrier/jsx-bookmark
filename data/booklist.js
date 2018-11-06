let books = [
    {
        title: "Alice's Adventures in Wonderland",
        author: "Lewis Carroll",
        curPage: 1,
        totPages: 202,
        isRead: false
    },
    {
        title: "Great Expectations",
        author: "Charles Dickens",
        curPage: 261,
        totPages: 523,
        isRead: true
    },
    {
        title: "The Giver",
        author: "Lois Lowry",
        curPage: 175,
        totPages: 180,
        isRead: true
    }
]

module.exports = {
    addBook: function (values) {
        books.push(values)
    },
    getBooks: function () {
        return {'bookArr': books}
    },
    getBook: function (id) {
        const index = books.findIndex(book => book.title === id)
        return books[index]
    },
    updateBook: function (id, values) {
        const index = books.findIndex(book => book.title === id)
        books.splice([index], 1, values)
    },
    deleteBook: function (id) {
        const index = books.findIndex(book => book.title === id)
        books.splice([index], 1)
    }
}