const React = require('react')

const Form = props =>
    <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
            <title>Bookmark Views</title>
        </head>
        <body>
            <div className="container">
                <h2>Edit Book</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="bookTitle">Title</label>
                        <input type="text" className="form-control" id="bookTitle" value={props.title} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bookAuthor">Author</label>
                        <input type="text" className="form-control" id="bookAuthor" value={props.author} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bookCurPage">Current Page</label>
                        <input type="number" className="form-control" id="bookCurPage" value={props.curPage}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bookTotPages">Total Pages</label>
                        <input type="number" className="form-control" id="bookTotPages" value={props.totPages} />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="bookReadCheck" checked={props.isRead} />
                        <label className="form-check-label" htmlFor="bookReadCheck">Already Read</label>
                    </div>
                    <button type="submit" className="btn btn-info mx-1" id="bookEditSubmit" data-id={props.title}>Submit</button>
                    <a className="btn btn-danger mx-1" href="/list" role="button">Cancel</a>
                </form>
            </div>

            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous"></script>
            <script src="../assets/js/formedit.js"></script>

        </body>
    </html>

module.exports = Form