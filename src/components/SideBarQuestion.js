/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getQuestions, upvoteQuestion, downvoteQuestion } from "../state/actions";

export const Question = ({ match, singleQuestion, questions, upvote, upvotes, downvote, downvotes}) => {
  const { meetupId } = match.params;
  useEffect(() => {
    singleQuestion(meetupId);
    if (upvotes === "You Successfully Upvoted for this Question") {
      singleQuestion(meetupId);
    }
    if (downvotes === "You Successfully Downvoted for this Question") {
      singleQuestion(meetupId);
    }
  }, [downvotes, meetupId, singleQuestion, upvote, upvotes]);


  return (
    <div>
      {questions[0] ? (
        questions.map(question => (
          <div className="question-meetup" key={question.id}>
            <div className="icon-meetup-link">
              <a href="#" onClick={() => upvote(question.id)}>
                <i
                  className="fa fa-arrow-up meetup-arrow icon-meetup-link"
                  aria-hidden="true"
                >
                  {question.upvotes}
                </i>
              </a>
              <a href="#" onClick={() => downvote(question.id)}>
                <i className="fa fa-arrow-down meetup-arrow" aria-hidden="true">
                  {question.downvotes}
                </i>
              </a>
            </div>
            <div>
              <p className="meetup-side-content">{question.body}</p>
              <a href={`/${question.id}/comments`} className="question-link">
                View Comments
              </a>
            </div>
          </div>
        ))
      ) : (
        <h1 className="no-question"> No Questions on this meetup yet...</h1>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  questions: state.State.questions,
  upvotes: state.State.upvote,
  downvotes: state.State.downvote
});

export const  SideBarQuestion = connect(
  mapStateToProps,
  { singleQuestion: getQuestions, upvote: upvoteQuestion, downvote: downvoteQuestion }
)(withRouter(Question));
