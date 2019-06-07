import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Characters from './Characters.js';

function Home () {
    return (
        <div>
            <h1>
                Fetching NYT Best Sellers ...
            </h1>

<Router>
<Link to='/Characters'><img src='https://static01.nyt.com/images/2019/01/11/books/00-BestSeller-Logo-Image/00-BestSeller-Logo-Image-mediumThreeByTwo225.png' alt='' /></Link>
<hr />
<Route path='/Characters' component={Characters} />
</Router>

            
      </div>
    )
  }







  export default Home;
