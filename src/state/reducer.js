import { initialState } from "./initialState";
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

export default (state = initialState, action) => {
  switch (action.type) {
    case MEETUP_GET_SUCCESS:
      return {
        ...state,
        AllMeetups: action.meetup
      };
    case MEETUP_GET_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        loggedinUser: action.payload
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loggedinUser: action.payload
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        errors: action.payload
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        errors: action.payload
      };
    case LOADING_STATE:
      return {
        ...state,
        loadingState: action.payload
      };
    case SINGLE_MEETUP_SUCCESS:
      return {
        ...state,
        singleMeetup: action.payload
      };
    case GET_MEETUP_QUESTION:
      return {
        ...state,
        questions: action.payload
      };
    default:
      return state;
  }
};
