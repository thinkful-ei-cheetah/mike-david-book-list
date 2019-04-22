import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    searchTerm: ''
  }

  submit = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.searchTerm);
    this.setState({searchTerm: ''});
  }
  
  render() {
    return (
      <form className="search-bar" onSubmit={(e) => {this.submit(e)}}>
        <label htmlFor="search">Search</label>
        <input type="text" id="search" onSubmit={e => this.setState({searchTerm: e.target.value})} />
        <button type="submit" className="search-button">Search</button>
      </form>
    )
  }
}

export default SearchBar;