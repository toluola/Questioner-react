/* eslint-disable no-console */
import axios from './axios';
import { MEETUP_GET_SUCCESS, MEETUP_GET_FAILURE, SIGN_IN_SUCCESS } from './actionTypes';

export const MeetupSuccess = meetup => ({
  type: MEETUP_GET_SUCCESS,
  meetup
});

export const MeetupFailure = error => ({
    type: MEETUP_GET_FAILURE,
    error
})

export const signinSuccess = user => ({
    type: SIGN_IN_SUCCESS,
    payload: user
})


export const GetMeetups = () => async dispatch => {
    try {
       const getMeetup = await axios.get('/meetups');
        dispatch(MeetupSuccess(getMeetup.data.data));
    } catch (error) {
       dispatch(MeetupFailure(error.response));
    }
}

export const userSignin = formData => async dispatch => {
    try {
        const user = await axios.post('/auth/login', formData)
        dispatch(signinSuccess(user.data.token));
    } catch (error) {
        console.log(error.response);
    }
}