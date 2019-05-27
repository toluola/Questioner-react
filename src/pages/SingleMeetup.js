import React from "react";
import { Row, Col } from 'react-bootstrap';
import MeetupDetails from '../components/MeetupDetails';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import SideBarMeetup from '../components/SideBarMeetup';

const singleMeetupPage = () => {
  return (
      <div>
    <Header />
    <div className='meetup-container'>
    <Row>
      <Col xs={9}><MeetupDetails /></Col>
      <Col><SideBarMeetup /></Col>
    </Row>
    </div>
    <Footer />
    </div>
  );
};

export default singleMeetupPage;
