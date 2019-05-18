import { initialState } from "./initialState";
import { MEETUP_GET_SUCCESS, MEETUP_GET_FAILURE } from "./actionTypes";

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
    default:
      return state;
  }
};
