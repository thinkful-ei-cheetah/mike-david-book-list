import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div>
        <label htmlFor="book-type">Book Type: </label>
        <select id="book-type" className="book-type" onChange={() => {}}>
          <option value="ebooks">ebooks</option>
          <option value="free-ebooks">Free ebooks</option>
          <option value="full">Full</option>
          <option value="paid-ebooks">Paid ebooks</option>
          <option value="partial">Partial</option>
        </select>
      </div>
    )
  }
}
export default Filter;