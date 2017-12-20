import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'

class Dashboard extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        updateBook: PropTypes.func.isRequired
    }

    render() {
        const { books, updateBook } = this.props
        const bookshelfs = [
                {shelf: 'currentlyReading', title: 'Currently Reading', books}, 
                {shelf: 'wantToRead', title: 'Want To Read', books}, 
                {shelf: 'read', title: 'Read', books}
            ]
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {bookshelfs.map(bookshelf => (
                            <Bookshelf 
                                key={ bookshelf.shelf } 
                                shelf={ bookshelf.shelf } 
                                title={ bookshelf.title }
                                books={ bookshelf.books } 
                                updateBook={ updateBook } 
                            />
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