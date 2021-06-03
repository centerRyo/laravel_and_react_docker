import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Top from './Top';
import User from './User';
import About from './About';
import Navbar from './Navbar';
import UserDetail from './UserDetail';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Top} />
          <Route path="/about" component={About} />
          <Route path="/user" exact component={User} />
          <Route path="/user/:id" component={UserDetail} />
        </Switch>
      </div>
    </Router>
  );
}

if (document.getElementById('app')) {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
}
