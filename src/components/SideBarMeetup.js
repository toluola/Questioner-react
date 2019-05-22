import React from "react";

const SideBarMeetup = () => {
  return (
    <div className='sidebar-meetup'>
      <h3 className="meetup-heading">Upcoming Meetups</h3>
      <hr />
      <div className="meetup-side-card-second">
      <p className='meetup-side-content'>Javascript In Nigeria</p>
        <div>
        <i className="fa fa-calendar icon-one" aria-hidden="true"> 27/06/2019 </i>
         <i className="fa fa-map-marker icon-two" aria-hidden="true"> Lekki </i>
        </div>
      </div>
    </div>
  );
};

export default SideBarMeetup;