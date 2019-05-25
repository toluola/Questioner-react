import React from "react";
import { Row, Col } from 'react-bootstrap';
import MeetupDetails from '../components/MeetupDetails';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import SideBarQuestion from '../components/SideBarQuestion';
import SideBarMeetup from '../components/SideBarMeetup';

const singleMeetupPage = () => {
  return (
      <div>
    <Header />
    <div className='meetup-container'>
    <Row>
      <Col><SideBarQuestion /></Col>
      <Col xs={6}><MeetupDetails /></Col>
      <Col><SideBarMeetup /></Col>
    </Row>
    </div>
    <Footer />
    </div>
  );
};

export default singleMeetupPage;
