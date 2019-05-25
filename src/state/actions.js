import jwtDecode from 'jwt-decode';
import axios from "./axios";
import {
  MEETUP_GET_SUCCESS,
  MEETUP_GET_FAILURE,
  SIGN_IN_SUCCESS,
  SIGN_UP_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_FAILURE,
  LOADING_STATE,
  SINGLE_MEETUP_SUCCESS,
  GET_MEETUP_QUESTION
} from "./actionTypes";

export const MeetupSuccess = meetup => ({
  type: MEETUP_GET_SUCCESS,
  meetup
});

export const MeetupFailure = error => ({
  type: MEETUP_GET_FAILURE,
  error
});

export const singleMeetupSuccess = meetup => ({
    type: SINGLE_MEETUP_SUCCESS,
    payload: meetup
})

export const signinSuccess = user => ({
  type: SIGN_IN_SUCCESS,
  payload: user
});

export const signinFailure = error => ({
  type: SIGN_IN_FAILURE,
  payload: { error }
});

export const signupFailure = error => ({
  type: SIGN_UP_FAILURE,
  payload: { error }
});

export const signupSuccess = user => ({
  type: SIGN_UP_SUCCESS,
  payload: user
});

export const loading = state => ({
  type: LOADING_STATE,
  payload: state
});

export const getMeetupQuestions = data => ({
    type: GET_MEETUP_QUESTION,
    payload: data
})

export const GetMeetups = () => async dispatch => {
  try {
    const getMeetup = await axios.get("/meetups");
    dispatch(MeetupSuccess(getMeetup.data.data));
  } catch (error) {
    dispatch(MeetupFailure(error.response));
  }
};

export const userSignin = formData => async dispatch => {
  try {
    dispatch(loading("true"));
    const user = await axios.post("/auth/login", formData);
    localStorage.setItem('questioner-token', user.data.token)
    const decoded = jwtDecode(user.data.token);
    dispatch(signinSuccess(decoded));
  } catch (error) {
    dispatch(loading("false"));
    dispatch(signinFailure(error.response.data.error));
  }
};

export const userSignup = formData => async dispatch => {
  try {
    dispatch(loading("true"));
    const register = await axios.post("/auth/signup", formData);
    const decoded = jwtDecode(register.data.token);
    dispatch(signinSuccess(decoded));
  } catch (error) {
    dispatch(loading("false"));
    dispatch(signupFailure(error.response.data.message));
  }
};

export const getSingleMeetup = id => async dispatch => {
    try {
        const getMeetup = await axios.get(`/meetups/${id}`)
        dispatch(singleMeetupSuccess(getMeetup.data.data))
    } catch (error) {
        throw new Error(error.response);
    }
}

export const getQuestions = (meetupId) => async dispatch => {
    try {
        const getQuestion = await axios.get(`/questions/${meetupId}`)
        dispatch(getMeetupQuestions(getQuestion.data.data));
    } catch (error) {
        throw new Error(error.response);
    }
}
