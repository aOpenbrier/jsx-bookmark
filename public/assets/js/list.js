editButtons = document.getElementsByClassName('bookEdit')
for (var i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener('click', function () {
        window.location = `/formEdit/${this.getAttribute('data-id')}`
    })
}

deleteButtons = document.getElementsByClassName('bookDelete')
for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', function(){
        fetch(`/books/${this.getAttribute('data-id')}`, {
            method: 'DELETE'
        })
            .then(r => {
                window.location = './list'
            })
            .catch(e => console.error(e))
    })
}