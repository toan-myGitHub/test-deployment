import React from 'react';
import BookCard from './BookCard';

export default class BookList extends React.Component {
  render() {    
      const bookList = this.props.books
          .map((book, idx) => {
              return (
                  <BookCard
                      image={book.book_image}
                      title={book.title}
                      author={book.author}
                      description={book.description}

                      onClick={this.props.onSelectBook}
                      idx={idx}
                      key={idx}
                      buttonText="Add to Reading List"
                  />
              );
          });

          
      return (
          <div>
              <h2 class="center">Best Sellers</h2>
                  {bookList}
                           
          </div>
      );
  }
}