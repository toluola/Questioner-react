import React from "react";
import { MeetupDetails } from '../components/MeetupDetails';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SideBarMeetup } from '../components/SideBarMeetup';

const singleMeetupPage = () => {
  return (
      <div>
    <Header />
    <div className='meetup-container'>
      <div className='details-meetup'><MeetupDetails /></div>
      <div className='details-side'><SideBarMeetup /></div>
    </div>
    <Footer />
    </div>
  );
};

export default singleMeetupPage;
