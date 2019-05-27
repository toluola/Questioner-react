import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getQuestions } from "../state/actions";

const SideBarQuestion = ({ match, singleQuestion, questions }) => {
  const { meetupId } = match.params;
  useEffect(() => {
    singleQuestion(meetupId);
  }, [meetupId, singleQuestion]);
  return (
    <div>
      {questions[0] ? (
        questions.map(question => (
          <div className="question-meetup">
            <div>
              <i className="fa fa-arrow-up meetup-arrow" aria-hidden="true">
                {question.upvotes}
              </i>
              <i className="fa fa-arrow-down meetup-arrow" aria-hidden="true">
                {question.downvotes}
              </i>
              {/* <i className="fa fa-comments meetup-arrow" aria-hidden="true">
            23
          </i> */}
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

const mapStateToProps = state => ({ questions: state.State.questions });

export default connect(
  mapStateToProps,
  { singleQuestion: getQuestions }
)(withRouter(SideBarQuestion));
