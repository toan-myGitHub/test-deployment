import React from 'react';
import './App.css';

export default class Characters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: {},
        isLoading: true
        }
    }
    
    componentDidMount() {
        fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Up8S84u5dVeZRGr1WvkNEaNmmmutSr2G')
            .then(response => {
                return response.json();
            })
            .then(data =>  {
                this.setState({
                data: data, 
                isLoading: false
                });
            });
    }

    render() {
        if (this.state.isLoading) {
            return <div>loading ...</div>
        }               
        const books = Object.keys(this.state.data.results.books)
            .map((book, idx) => 
            
            <div class="Character-block" key={idx}>                      
               <img src={this.state.data.results.books[book].book_image} alt="Avatar" />  
                <div>
                    <h3>
                        {this.state.data.results.books[book].title}
                    </h3>
                    <b>{this.state.data.results.books[book].author}</b>
                    <br></br>{this.state.data.results.books[book].description}

                </div>   
                 
            </div>
            );              
        return (           
          <div>   
            <h1>
            Books
            </h1>
            {books}
          </div>
        )
    }

}