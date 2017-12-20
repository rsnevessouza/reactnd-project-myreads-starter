import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import ListBooks from './ListBooks'

class SearchBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        updateBook: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({ query })
    }

    render() {
        const { books, updateBook } = this.props
        const { query } = this.state

        let showingBooks

        if(query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            showingBooks = books.filter(book => (book.title && match.test(book.title)) || (book.authors && match.test(book.authors.toString())))
        } else {
            showingBooks = books
        }

        showingBooks.sort(sortBy('title'))

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={query} onChange={(event) => this.updateQuery(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ListBooks books={showingBooks} updateBook={updateBook} />
                </div>
            </div>
        )
    }
}

export default SearchBooks