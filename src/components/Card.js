/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { GetMeetups } from '../state/actions';

// eslint-disable-next-line react/prop-types
export const Card = ({ getMeetups, allMeetups }) => {
  useEffect(() => {
    getMeetups();
  }, [])

  return (
     <div>
     {allMeetups.map(meetup => (
       <a href={`meetup/${meetup.id}`} className='card-link'>
      <div className='card' key={meetup.id}>
      <img src='https://res.cloudinary.com/dz4wtphvf/image/upload/v1558108161/course1_urjbkq.jpg' className='/' alt='meetup' />
      <hr />
     <h3>{meetup.topic}</h3>
     <p>{meetup.location}</p>
     <p>{meetup.happening_on}<span className='span'>{meetup.tags}</span></p>
     </div>
     </a>
     ))}
     </div>
  )
}

const mapStateToProps = state => ({
  allMeetups: state.State.AllMeetups
})

export const ConnectedCard = connect(mapStateToProps, { getMeetups: GetMeetups })(Card)