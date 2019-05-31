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
import Comment from './pages/Comment'
import { PrivateRoute } from './components/UserRoute';

const App = () => 
  <Router>
    <Switch>
      <Route path='/' exact component={MainPage}></Route>
      <Route path='/signin' exact component={SigninPage}></Route>
      <Route path='/signup' exact component={SignupPage}></Route>
      <PrivateRoute path='/meetup/:id' exact component={singleMeetupPage}></PrivateRoute>
      <PrivateRoute path='/meetup/:meetupId/questions/' exact component={QuestionPage}></PrivateRoute>
      <PrivateRoute path='/:questionId/comments' exact component={Comment}></PrivateRoute>
    </Switch>
  </Router>

export default App;
       