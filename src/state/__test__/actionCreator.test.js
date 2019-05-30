import {
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
import {
  MEETUP_GET_SUCCESS,
  MEETUP_GET_FAILURE,
  SIGN_IN_SUCCESS,
  SIGN_UP_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_FAILURE,
  SINGLE_MEETUP_SUCCESS,
  GET_MEETUP_QUESTION,
  GET_QUESTION_COMMENT,
  POST_MEETUP_QUESTION,
  POST_QUESTION_COMMENT,
  UPVOTE_QUESTION,
  DOWNVOTE_QUESTION,
  LOGOUT,
  ERROR
} from "../actionTypes";

describe("Getting A Meetup Success", () => {
  it("Should create an action for successful retrieval of all meetups", () => {
    const meetup = {
      name: "test"
    };
    const result = {
      type: MEETUP_GET_SUCCESS,
      meetup
    };
    expect(MeetupSuccess(meetup)).toEqual(result);
  });

  it("Should create an action for error", () => {
    const payload = {
      name: "test"
    };
    const result = {
      type: ERROR,
      payload
    };
    expect(errors(payload)).toEqual(result);
  });

  it("Should create an action for upvoting a question", () => {
    const payload = {
      name: "test"
    };
    const result = {
      type: UPVOTE_QUESTION,
      payload
    };
    expect(QuestionUpvote(payload)).toEqual(result);
  });

  it("Should create an action for downvoting a question", () => {
    const payload = {
      name: "test"
    };
    const result = {
      type: DOWNVOTE_QUESTION,
      payload
    };
    expect(QuestionDownvote(payload)).toEqual(result);
  });

  it("Should create an action for fetching single meetup", () => {
    const payload = {
      name: "test"
    };
    const result = {
      type: SINGLE_MEETUP_SUCCESS,
      payload
    };
    expect(singleMeetupSuccess(payload)).toEqual(result);
  });

  it("Should create an action for signin", () => {
    const payload = {
      name: "test"
    };
    const result = {
      type: SIGN_IN_SUCCESS,
      payload
    };
    expect(signinSuccess(payload)).toEqual(result);
  });

  it("Should create an action for signup", () => {
    const payload = {
      name: "test"
    };
    const result = {
      type: SIGN_UP_SUCCESS,
      payload
    };
    expect(signupSuccess(payload)).toEqual(result);
  });

  it("Should create an action for fetching questions", () => {
    const payload = {
      name: "test"
    };
    const result = {
      type: GET_MEETUP_QUESTION,
      payload
    };
    expect(getMeetupQuestions(payload)).toEqual(result);
  });

  it("Should create an action for fetching comments", () => {
    const payload = {
      name: "test"
    };
    const result = {
      type: GET_QUESTION_COMMENT,
      payload
    };
    expect(getQuestionComment(payload)).toEqual(result);
  });

  it("Should create an action for posting a meetup", () => {
    const payload = {
      name: "test"
    };
    const result = {
      type: POST_MEETUP_QUESTION,
      payload
    };
    expect(postMeetupQuestion(payload)).toEqual(result);
  });

  it("Should create an action for posting a comment", () => {
    const payload = {
      name: "test"
    };
    const result = {
      type: POST_QUESTION_COMMENT,
      payload
    };
    expect(postQuestionComment(payload)).toEqual(result);
  });

  it("Should create an action for posting a comment", () => {
    const payload = {
      name: "test"
    };
    const result = {
      type: POST_QUESTION_COMMENT,
      payload
    };
    expect(postQuestionComment(payload)).toEqual(result);
  });

  it("Should create an action for loging out", () => {
    const payload = {
      name: "test"
    };
    const result = {
      type: LOGOUT
    };
    expect(logout(payload)).toEqual(result);
  });

  it("Should create an action for error in fetching meetups", () => {
    const payload = {
      name: "test"
    };
    const result = {
      type: MEETUP_GET_FAILURE,
      error: payload
    };
    expect(MeetupFailure(payload)).toEqual(result);
  });

  it("Should create an action for error in signin", () => {
    const payload = {
      name: "test"
    };
    const result = {
      type: SIGN_IN_FAILURE,
      payload: { error: payload }
    };
    expect(signinFailure(payload)).toEqual(result);
  });

  it("Should create an action for error in signin", () => {
    const payload = {
      name: "test"
    };
    const result = {
      type: SIGN_UP_FAILURE,
      payload: { error: payload }
    };
    expect(signupFailure(payload)).toEqual(result);
  });
});
