import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Debounce } from 'react-throttle'
import PropTypes from 'prop-types'
import ListBooks from './ListBooks'
import * as BooksAPI from './utils/BooksAPI'

class SearchBooks extends Component {
    static propTypes = {
        updateBook: PropTypes.func.isRequired,
        books: PropTypes.array.isRequired
    }

    state = {
        booksFound: []
    }

    updateQuery = (query) => {
        if(query) {
            Promise.resolve(BooksAPI.search(query, 10)).then(books => {
                this.setState({ booksFound: books.error ? [] : books })
            })
        } else {
            this.setState({ booksFound: [] })
        }   
    }

    checkBookshelf = (listBooks, book) => {
        let findBook = listBooks.find(b => b.id === book.id)
        return findBook ? findBook.shelf : 'none'
    }

    render() {
        const { books, updateBook } = this.props
        const { booksFound } = this.state

        let showingBooks

        if(booksFound.length > 0) {
            showingBooks = booksFound.map(bf => ({ ...bf, shelf: this.checkBookshelf(books, bf) }))
        } else {
            showingBooks = booksFound;
        }

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <Debounce time="400" handler="onChange">
                            <input 
                                type="text" 
                                placeholder="Search by title or author"
                                onChange={(event) => this.updateQuery(event.target.value)} 
                            />
                        </Debounce>
                    </div>
                </div>
                <div className="search-books-results">
                    {showingBooks.length > 0 && (<ListBooks books={showingBooks} updateBook={updateBook} />)}
                </div>
            </div>
        )
    }
}

export default SearchBooks