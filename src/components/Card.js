/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { GetArticle } from '../state/actions';

// eslint-disable-next-line react/prop-types
export const Card = ({ getArticles, allArticles }) => {
  useEffect(() => {
    getArticles();
  }, [])

  return (
     <div>
     {allArticles.map(article => (
      <div className='card' key={article.id}>
      <img src='https://res.cloudinary.com/dz4wtphvf/image/upload/v1558108161/course1_urjbkq.jpg' className='/' alt='meetup' />
     <h4>{article.topic}</h4>
     <p className='p'>{article.location}</p>
     <p className='p'>{article.happening_on}</p>
     <p className='p'>{article.tags}</p>
     </div>
     ))}
     </div>
  )
}

const mapStateToProps = state => ({
  allArticles: state.Article.AllArticles
})

export const ConnectedCard = connect(mapStateToProps, { getArticles: GetArticle })(Card)