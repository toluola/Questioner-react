import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import './App.css';
import './css/Header.css';
import './css/Hero.css';
import './css/Button.css';
import './css/Menu.css';
import './css/Card.css';
import './css/Footer.css';
import { MainPage } from './pages';

const App = () => 
  <Router>
    <Switch>
      <Route path='/' exact component={MainPage}></Route>
    </Switch>
  </Router>

export default App;
