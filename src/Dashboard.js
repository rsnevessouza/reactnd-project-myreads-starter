import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ListBooks from './ListBooks'

class Dashboard extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        updateBook: PropTypes.func.isRequired
    }

    render() {
        const { books, updateBook } = this.props
        const bookshelfs = [
                {shelf: 'currentlyReading', title: 'Currently Reading'}, 
                {shelf: 'wantToRead', title: 'Want To Read'}, 
                {shelf: 'read', title: 'Read'}
            ]
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {bookshelfs.map(bookshelf => (
                            <div key={bookshelf.shelf} className="bookshelf">
                                <h2 className="bookshelf-title">{bookshelf.title}</h2>
                                <div className="bookshelf-books">
                                    <ListBooks books={books.filter(book => book.shelf === bookshelf.shelf)} updateBook={updateBook} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default Dashboard