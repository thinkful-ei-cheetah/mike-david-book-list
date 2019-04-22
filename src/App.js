import React, { Component } from 'react';
import './App.css';
import SearchBar from './FilterSearch/SearchBar';
// import FilterSearch from './FilterSearch/FilterSearch';
import ResultList from './List/ResultList';

class App extends Component {
  state = {
    books: [],
    searchTerm: '',
    searching: false,
  }

  updateSearchTerm(term){
    this.setState({
      searchTerm: term
    },
    this.handleSearch()
    )
  }

  componentDidMount() {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyC6R0xVVEABBqZuTLIChXn67svSgmDZikI`;
    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          books: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  handleSearch = (searchTerm) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyC6R0xVVEABBqZuTLIChXn67svSgmDZikI`;
    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          books: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }


  render() {
    return (
      <div className="App">
        <header>
          Google Book Search
      </header>
        <FilterSearch handleSearch={this.handleSearch} />
        <ResultList books={this.state.books} />
        SOMETHING
      </div>
    );
  }

}

export default App;
