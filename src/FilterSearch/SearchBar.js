import React, { Component } from 'react';

class SearchBar extends Component {

  render() {
    return (
      <form className="search-bar"
       onSubmit={(e) => {
         e.preventDefault();
         this.props.handleSearch(e.target.searchInput.value)
        }}
      >
        <label htmlFor="search">Search</label>
        <input type="text" id="search" name="searchInput" />
        <button type="submit" className="search-button">Search</button>
      </form>
    )
  }
}

export default SearchBar;