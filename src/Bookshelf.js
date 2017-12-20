import React from 'react'
import ListBooks from './ListBooks'

const Bookshelf = ({ shelf, title, books, updateBook }) => {
    const currentBooks = books.filter(book => book.shelf === shelf)
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ListBooks books={currentBooks} updateBook={updateBook} />
            </div>
        </div>
    )
}

export default Bookshelf