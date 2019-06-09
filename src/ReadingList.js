import React from 'react';
import BookCardReadingList from './BookCardReadingList';

class ReadingList extends React.Component {
    render() {
        const bookList = this.props.books
            .map((book, idx) => {
                return (               
                  <BookCardReadingList                
                  image={book.book_image}
                      title={book.title}
                      author={book.author}
                      description={book.description}
                  onClick={this.props.onDeleteBook}
                  idx={idx}
                  key={idx}
                  buttonText="Remove from Reading List"
              />

                );
            });

        return (
            <div>
                <h2 class="center">Reading List</h2>               
                    {bookList}
                
            </div>
        );
    }
}

export default ReadingList;