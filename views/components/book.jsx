const React = require('react')

const Book = props =>
    <table className="table table-sm border">
        <tbody>
            <thead className="thead-light text-center">
                <th colSpan="2" scope="row">{props.title}</th>
            </thead>
            <tr>
                <th scope="row">Author</th>
                <td>{props.author}</td>
            </tr>
            <tr>
                <th scope="row">Current Page</th>
                <td>{props.curPage} of {props.totPages}</td>
            </tr>
            <tr>
                <th scope="row">Already Read</th>
                <td>{props.isRead ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
                <td className='text-center' colSpan="2">
                    <button className='btn btn-primary bookEdit mx-1 w-25' data-id={props.title}>Edit</button>
                    <button className='btn btn-danger bookDelete mx-1 w-25' data-id={props.title}>Delete</button>
                </td>
            </tr>
        </tbody>
    </table>

module.exports = Book