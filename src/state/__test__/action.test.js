import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { JWT_TOKEN, mockedObject } from "./mocks/mockData";
import axios from "../axios";
import {
  GetMeetups,
  userSignin,
  userSignup,
  getSingleMeetup,
  getQuestions,
  getComments,
  postQuestion,
  postComment,
  upvoteQuestion,
  downvoteQuestion,
  userLogout,
  MeetupSuccess,
  errors,
  QuestionUpvote,
  QuestionDownvote,
  MeetupFailure,
  singleMeetupSuccess,
  signinSuccess,
  signinFailure,
  signupFailure,
  logout,
  signupSuccess,
  getMeetupQuestions,
  getQuestionComment,
  postMeetupQuestion,
  postQuestionComment
} from "../actions";

const mockStore = configureMockStore([thunk]);
const store = mockStore({});

describe('Test all Actions', () => {
    it('Get all meetups', async () => {
        axios.defaults.headers.common.Authorization = JWT_TOKEN;
        await store.dispatch(GetMeetups());
        const [getAction] = store.getActions();
        expect(getAction.type).toEqual(MeetupSuccess(mockedObject).type);
      });
})
