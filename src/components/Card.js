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
     {allMeetups.map(article => (
       <a href='#' className='card-link'>
      <div className='card' key={article.id}>
      <img src='https://res.cloudinary.com/dz4wtphvf/image/upload/v1558108161/course1_urjbkq.jpg' className='/' alt='meetup' />
      <hr />
     <h3>{article.topic}</h3>
     <p>{article.location}</p>
     <p>{article.happening_on}<span className='span'>{article.tags}</span></p>
     </div>
     </a>
     ))}
     </div>
  )
}

const mapStateToProps = state => ({
  allMeetups: state.Meetup.AllMeetups
})

export const ConnectedCard = connect(mapStateToProps, { getMeetups: GetMeetups })(Card)