import React from 'react';
import BookCard from './BookCard';
import BookCardNonfiction from './BookCardNonfiction';
import BookCardFiction from './BookCardFiction';

export default class BookList extends React.Component {
  render() {    
      const bookList = this.props.books
          .map((book, idx) => {
              if (this.props.list_name === 'Hardcover Nonfiction') {
  return (
                  <BookCardNonfiction
                      image={book.book_image}
                      title={book.title}
                      author={book.author}
                      list_name={this.props.list_name}
                      onClick={this.props.onSelectBook}
                      idx={idx}
                      key={idx}
                      buttonText="Add to Reading List"
                  />
              );

              }
              else {
                return (
                    <BookCardFiction
                        image={book.book_image}
                        title={book.title}
                        author={book.author}
                        list_name={this.props.list_name}
                        onClick={this.props.onSelectBook}
                        idx={idx}
                        key={idx}
                        buttonText="Add to Reading List"
                    />
                );
              }
            
          });

          
      return (
          <div>
              <h2 class="center">{this.props.list_name} <br />Best Sellers</h2>
                  {bookList}
                           
          </div>
      );
  }
}