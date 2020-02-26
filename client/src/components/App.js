import React from 'react';
import { BrowserRouter, Route, Link   } from 'react-router-dom';

const PageOne = () => {
  return <div>
    Page One
    <Link to="/page-two">PageTwo</Link>
    </div>
}

const PageTwo = () => {
  return <div>Page Two
    <Link to="/">PageOne</Link>
  </div>
}

const App = () => {
  return <div>
    <BrowserRouter>
      <div>
        <Route path='/' exact component={PageOne} />
        <Route path='/page-two' component={PageTwo} />
      </div>
    </BrowserRouter>
  </div>;
};

export default App;
   
