import axios from "./axios";
import {
  MEETUP_GET_SUCCESS,
  MEETUP_GET_FAILURE,
  SIGN_IN_SUCCESS,
  SIGN_UP_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_FAILURE,
  LOADING_STATE
} from "./actionTypes";

export const MeetupSuccess = meetup => ({
  type: MEETUP_GET_SUCCESS,
  meetup
});

export const MeetupFailure = error => ({
  type: MEETUP_GET_FAILURE,
  error
});

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
    const user = await axios.post("/auth/login", formData);
    dispatch(loading("true"));
    dispatch(signinSuccess(user.data.token));
  } catch (error) {
    dispatch(loading("false"));
    dispatch(signinFailure(error.response.data.error));
  }
};

export const userSignup = formData => async dispatch => {
  try {
    const register = await axios.post("/auth/signup", formData);
    dispatch(loading("true"));
    dispatch(signupSuccess(register.data.token));
  } catch (error) {
    dispatch(loading("false"));
    dispatch(signupFailure(error.response.data.message));
  }
};
