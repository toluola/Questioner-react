import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import './App.css';
import { LandingPage } from './pages/landingPage';

const App = () => 
  <Router>
    <Switch>
      <Route path='/' exact component={LandingPage}></Route>
    </Switch>
  </Router>

export default App;
