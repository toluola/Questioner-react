import jwtDecode from "jwt-decode";
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
  GET_MEETUP_QUESTION,
  GET_QUESTION_COMMENT,
  POST_MEETUP_QUESTION,
  POST_QUESTION_COMMENT,
  UPVOTE_QUESTION,
  DOWNVOTE_QUESTION,
  LOGOUT,
  ERROR
} from "./actionTypes";

export const MeetupSuccess = meetup => ({
  type: MEETUP_GET_SUCCESS,
  meetup
});

export const errors = error => ({
  type: ERROR,
  payload: error
})

export const QuestionUpvote = data => ({
type: UPVOTE_QUESTION,
payload: data
})

export const QuestionDownvote = data => ({
  type: DOWNVOTE_QUESTION,
  payload: data
})

export const MeetupFailure = error => ({
  type: MEETUP_GET_FAILURE,
  error
});

export const singleMeetupSuccess = meetup => ({
  type: SINGLE_MEETUP_SUCCESS,
  payload: meetup
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

export const logout = () => ({
  type: LOGOUT
})

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
});

export const getQuestionComment = data => ({
  type: GET_QUESTION_COMMENT,
  payload: data
});

export const postMeetupQuestion = data => ({
  type: POST_MEETUP_QUESTION,
  payload: data
});

export const postQuestionComment = data => ({
  type: POST_QUESTION_COMMENT,
  payload: data
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
    dispatch(loading("true"));
    const user = await axios.post("/auth/login", formData);
    const decoded = jwtDecode(user.data.token);
    dispatch(signinSuccess(decoded));
    localStorage.setItem("questionerToken", user.data.token);
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
    localStorage.setItem("questionerToken", register.data.token);
  } catch (error) {
    dispatch(loading("false"));
    dispatch(signupFailure(error.response.data.message));
  }
};

export const getSingleMeetup = id => async dispatch => {
  try {
    const getMeetup = await axios.get(`/meetups/${id}`);
    dispatch(singleMeetupSuccess(getMeetup.data.data));
  } catch (error) {
    dispatch(errors(error.response.data.message));
  }
};

export const getQuestions = meetupId => async dispatch => {
  try {
    const getQuestion = await axios.get(`/questions/${meetupId}`);
    dispatch(getMeetupQuestions(getQuestion.data.data));
  } catch (error) {
    throw new Error(error.response);
  }
};

export const getComments = questionId => async dispatch => {
  try {
    const getComment = await axios.get(`/comments/${questionId}`);
    dispatch(getQuestionComment(getComment.data.data));
  } catch (error) {
    throw new Error(error.response);
  }
};

export const postQuestion = (meetupId, body) => async dispatch => {
  try {
    const question = await axios.post(`/questions/${meetupId}`, body );
    dispatch(postMeetupQuestion(question.data.message));
  } catch (error) {
    throw new Error(error.response);
  }
};

export const postComment = (questionId, body) => async dispatch => {
  try {
    const comment = await axios.post(`/comments/${questionId}`, body );
    dispatch(postQuestionComment(comment.data.message));
  } catch (error) {
    throw new Error(error.response);
  }
};

export const upvoteQuestion = questionId => async dispatch => {
  try {
    const upvote = await axios.patch(`questions/upvote/${questionId}`)
    dispatch(QuestionUpvote(upvote.data.message));
  } catch (error) {
    dispatch(QuestionUpvote(error.response.data.message));
  }
}

export const downvoteQuestion = questionId => async dispatch => {
  try {
    const downvote = await axios.patch(`questions/downvote/${questionId}`)
    dispatch(QuestionDownvote(downvote.data.message));
  } catch (error) {
    dispatch(QuestionDownvote(error.response.data.message));
  }
}

export const userLogout = () => dispatch => {
  localStorage.removeItem('questionerToken');
  dispatch(logout());
}
