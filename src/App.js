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
import './css/Signin.css';
import './css/Meetup.css';
import './css/Comment.css';
import MainPage  from './pages';
import QuestionPage from './pages/Questions';
import { SigninPage } from './pages/Signin';
import { SignupPage } from './pages/Signup';
import singleMeetupPage from './pages/SingleMeetup';
import Comment from './pages/Comment';

const App = () => 
  <Router>
    <Switch>
      <Route path='/' exact component={MainPage}></Route>
      <Route path='/signin' exact component={SigninPage}></Route>
      <Route path='/signup' exact component={SignupPage}></Route>
      <Route path='/meetup/:id' exact component={singleMeetupPage}></Route>
      <Route path='/meetup/:meetupId/questions/' exact component={QuestionPage}></Route>
      <Route path='/:questionId/comments' exact component={Comment}></Route>
    </Switch>
  </Router>

export default App;
       