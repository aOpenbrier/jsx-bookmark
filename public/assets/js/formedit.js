document.querySelector('#bookEditSubmit').addEventListener('click', event => {
    event.preventDefault()
        fetch(`/books/${document.querySelector('#bookEditSubmit').getAttribute('data-id')}`, {
        method: 'PUT',
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
        .then(r => { console.log(r) })
        .catch(e => { console.error(e) })
})