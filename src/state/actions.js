/* eslint-disable no-console */
import axios from './axios';
import { MEETUP_GET_SUCCESS, MEETUP_GET_FAILURE } from './actionTypes';

export const MeetupSuccess = meetup => ({
  type: MEETUP_GET_SUCCESS,
  meetup
});

export const MeetupFailure = error => ({
    type: MEETUP_GET_FAILURE,
    error
})


export const GetMeetups = () => async dispatch => {
    try {
       const getMeetup = await axios.get('/meetups');
        dispatch(MeetupSuccess(getMeetup.data.data));
    } catch (error) {
       dispatch(MeetupFailure(error.response));
    }
}