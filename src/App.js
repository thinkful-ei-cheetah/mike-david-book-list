import React, { Component } from 'react';
import './App.css';
import SearchBar from './FilterSearch/SearchBar';
import Filter from './FilterSearch/Filter';
import ResultList from './List/ResultList';
import PrintType from './FilterSearch/PrintType'

class App extends Component {
  state = {
    books: [],
    searchTerm: 'game',
    searching: false,
    printType: 'all',
    filter: 'ebooks'
  }

  updateSearchTerm(term){
    this.setState({
      searchTerm: term
    },
    this.handleSearch()
    )
  }

  componentDidMount() {
    //This is how the page will load initially
    this.handleSearch(this.state.searchTerm);
  }

  handleSearch = (searchTerm, printType = this.state.printType, filter = this.state.filter) => {
    this.setState({
      searchTerm: searchTerm,
      printType: printType,
      filter: filter
    })
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&${printType ? `printType=${printType}&` : null}${filter ? `filter=${filter}&` : null}key=AIzaSyC6R0xVVEABBqZuTLIChXn67svSgmDZikI`;
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
        <Filter handleSearch={this.handleSearch} searchTerm={this.state.searchTerm} printType={this.state.printType} />
        <PrintType handleSearch={this.handleSearch} searchTerm={this.state.searchTerm} filter={this.state.filter} />
        <SearchBar handleSearch={this.handleSearch}/>
        <ResultList books={this.state.books} />
      </div>
    );
  }

}

export default App;
