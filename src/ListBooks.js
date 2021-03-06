import React from 'react'

const ListBooks = ({ books, updateBook }) => {
    return (
    	<ol className="books-grid">
            {books.map(book => (
                <li key={book.id}>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")`}}></div>
                                <div className="book-shelf-changer">
                                    <select value={book.shelf} onChange={(e) => updateBook(e.target.value, book)}>
                                        <option value="none" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                        <div className="book-title">{book.title}</div>
                        {books.authors && (
                            <div className="book-authors">{book.authors.map((author, index) => (<span key={index}>{author}</span>))}</div>
                        )}
                    </div>
                </li>
            ))}
        </ol>
    )
}

export default ListBooks