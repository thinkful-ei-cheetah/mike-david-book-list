import React, { Component } from 'react';


class ResultList extends Component {
  generateList(){
    let bookArray = []
    console.log(this.props.books)
    if (this.props.books.items){
    bookArray = this.props.books.items.map((book, key) => {
      return (
        <div key={key}>
          <h2>{book.volumeInfo.title}</h2>
          <img alt="book cover" src={book.volumeInfo.imageLinks.thumbnail}></img>
          <h3>{book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'no author listed'}</h3>
          <h3>{book.saleInfo.listPrice ? book.saleInfo.listPrice.amount : 'price unavailable'}</h3>
          <p>{book.volumeInfo.description}</p>
        </div>
      )
    })
  }
  console.log(bookArray)
    return bookArray;
  }
  
  render() {
    return (
      <section>
        {this.generateList()}
      </section>
    )
  }
}

export default ResultList;




// id, title, authors, description, listPrice