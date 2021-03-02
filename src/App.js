import './App.css';
import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
// import Navbar from './components/navbar';
import Places from './containers/Places';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Places} />
      </Switch>
    </Router>
  );
}

export default App;