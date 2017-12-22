import React from 'react'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import Dashboard from './Dashboard'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  updateBook = (target, book) => {
    Promise.resolve(BooksAPI.update(book, target)).then(() => {
      let { books } = this.state
      books = books.filter(b => b.id !== book.id).concat({
        ...book,
        shelf: target
      })
      this.setState({ books })
    })
  }

  render() {
    const { books } = this.state
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <Dashboard books={books} updateBook={this.updateBook} />
        )}/>
        
        <Route path="/search" render={() => (
          <SearchBooks books={books} updateBook={this.updateBook} />
        )} />

      </div>
    )
  }
}

export default BooksApp
