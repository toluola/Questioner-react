import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import './App.css';
import './css/Header.css';
import './css/Hero.css';
import './css/Button.css';
import { LandingPage } from './pages/landingPage';

const App = () => 
  <Router>
    <Switch>
      <Route path='/' exact component={LandingPage}></Route>
    </Switch>
  </Router>

export default App;
