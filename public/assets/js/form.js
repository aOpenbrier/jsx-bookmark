
document.querySelector('#bookSubmit').addEventListener('click', event => {
    event.preventDefault()
    // send new book from client
    fetch(`/books`, {	
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            title: document.querySelector('#bookTitle').value,
            author: document.querySelector('#bookAuthor').value,
            curPage: parseInt(document.querySelector('#bookCurPage').value) || 1,
            totPages: parseInt(document.querySelector('#bookTotPages').value) || 999,
            isRead: document.querySelector('#bookReadCheck').checked
            })
    })
    .then(r => { 
        window.location = './list'
    })
    .catch(e => { console.error(e) })
})