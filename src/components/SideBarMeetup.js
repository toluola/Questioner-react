import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { GetMeetups } from "../state/actions";

 export const SideBar = ({ getMeetup, meetups }) => {
  useEffect(() => {
    getMeetup();
  }, [getMeetup]);
  return (
      <div className="sidebar-meetup">
          <h3 className="meetup-heading">Upcoming Meetups</h3>
          <hr className='hr' />
          {meetups.slice(0, 5).map(meetup => (
              <a href={`/meetup/${meetup.id}`} className="sidebar-meetup">
              <div className="meetup-side-card-second">
                <p className="meetup-side-content">{meetup.topic}</p>
                <div>
                  <i className="fa fa-calendar icon-one" aria-hidden="true">
                    {" "}
                    {meetup.happening_on}{" "}
                  </i>
                  <i className="fa fa-map-marker icon-two" aria-hidden="true">
                    {" "}
                    {meetup.location}{" "}
                  </i>
                </div>
              </div>
            </a>
          ))}
      </div>
    
  );
};

const mapStateToProps = state => ({
  meetups: state.State.AllMeetups
});

export const SideBarMeetup = connect(
  mapStateToProps,
  { getMeetup: GetMeetups }
)(withRouter(SideBar));
