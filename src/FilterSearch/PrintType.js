import React, { Component } from 'react';

class PrintType extends Component {
  render() {
    return (
      <div>
        <label htmlFor="print-type">Print Type: </label>
        <select id="print-type" className="print-type" onChange={() => {}}>
          <option value="all">all</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
      </div>
    )
  }
}
export default PrintType;