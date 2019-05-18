/* eslint-disable no-console */
import axios from './axios';
import { ARTICLE_GET_SUCCESS, ARTICLE_GET_FAILURE } from './actionTypes';

export const ArticleSuccess = article => ({
  type: ARTICLE_GET_SUCCESS,
  article
});

export const ArticleFailure = error => ({
    type: ARTICLE_GET_FAILURE,
    error
})


export const GetArticle = () => async dispatch => {
    try {
       const getArticle = await axios.get('/meetups');
        dispatch(ArticleSuccess(getArticle.data.data));
    } catch (error) {
       dispatch(ArticleFailure(error.response));
    }
}