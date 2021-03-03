import './App.css';
import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
// import Navbar from './components/navbar';
import Places from './containers/Places';
import PlaceDetails from './containers/PlaceDetails';
import Welcome from './components/welcome';

function App() {
  return (
    <section className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/places" component={Places} />
          <Route exact path="/place/:id" component={PlaceDetails} />
        </Switch>
      </Router>
    </section>
  );
}

export default App;
