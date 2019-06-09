import React, { Component } from 'react';
import './App.css';
import ReadingList from './ReadingList';
import BookList from './BookList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    /* name, genre given defaults start value to prevent click submit/fetch fail  */ 
    datePeriod: '2009-01-14',
    genre: '/hardcover-fiction',
    list_name: '',
    results: [],
    bestSellers: [],
    selectedBooks: []
    };  

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

};

handleChange(event) {
  const target = event.target;
  const value = target.value;
  const name = target.name;

  this.setState({
    /* name="datePeriod" or name="genre" */ 
    [name]: value
  });
}

handleSubmit(event) {
  

  event.preventDefault();

  fetch(`https://api.nytimes.com/svc/books/v3/lists/${this.state.datePeriod}${this.state.genre}.json?api-key=Up8S84u5dVeZRGr1WvkNEaNmmmutSr2G`)
  .then(response => {
    return response.json();
  })
  .then(data =>  {
    this.setState({
      bestSellers: data.results.books,
      list_name: data.results.list_name,
      isLoading: false
    });

  }
  );

}

  selectBook = (idx) => {
    const selectedBook = this.state.bestSellers[idx];
    if (this.state.selectedBooks.includes(selectedBook)) {
      alert('You already selected that book.');
      return;
    }
    
    else {

    if (this.state.selectedBooks.length > 3 ) {
      alert('You selected more than 3 books. Make sure you have time to read them all.');
      
      }

    this.setState(prevState => {
      return {
        /*
        selectedBook added to top of the list
        selectedBooks: [selectedBook, ...prevState.selectedBooks]
        selectedBook added at the end of the list
        selectedBooks: [...prevState.selectedBooks, selectedBook]
        */
        selectedBooks: [selectedBook, ...prevState.selectedBooks]
      };
    });
  }

  }

  deleteBook = (idx) => {    
    this.setState(prevState => {
      const selectedBooks = [...prevState.selectedBooks];
      selectedBooks.splice(idx, 1);

      return {
        selectedBooks
      };
    });
  }

  render() {


    return (


  
<div class="wrapper">

  <p class="headline"> <img class ="logoNYTBestSellers" src='https://static01.nyt.com/images/2019/01/11/books/00-BestSeller-Logo-Image/00-BestSeller-Logo-Image-mediumThreeByTwo225.png' alt='' />

<h1>Create Your Reading List  from <br />10 Years Worth of NYT Best Sellers</h1>

<form onSubmit={this.handleSubmit}>


<label>Select Genre
        
          <select value={this.state.genre} name="genre" type="text" onChange={this.handleChange}>
          
            
         
            <option value="/hardcover-fiction">Fiction</option>
            <option value="/hardcover-nonfiction">Nonfiction</option>
          </select>
        </label>
        <br />
        <label>Select Year
        
          <select value={this.state.datePeriod} name="datePeriod" type="number" onChange={this.handleChange}>
             
         
            <option value="2009-01-14">2009</option>
            <option value="2010-01-14">2010</option>
            <option value="2011-01-14">2011</option>
            <option value="2012-01-14">2012</option>
            <option value="2013-01-14">2013</option>
            <option value="2014-01-14">2014</option>
            <option value="2015-01-14">2015</option>
            <option value="2016-01-14">2016</option>
            <option value="2017-01-14">2017</option>
            <option value="2018-01-14">2018</option>
            <option value="2019-01-14">2019</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
</p>

  <div class="readinglist">
 <ReadingList
          books={this.state.selectedBooks}
          onDeleteBook={this.deleteBook}

        />
  </div>

  <div class="books">
   <BookList
          books={this.state.bestSellers}
          list_name={this.state.list_name}
        onSelectBook={this.selectBook}
        />
  </div>
</div>

    );
  }
}
export default App;
