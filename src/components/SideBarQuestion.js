import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { getQuestions } from "../state/actions";

const SideBarQuestion = ({ match, singleQuestion, questions }) => {
  const { id } = match.params;
  useEffect(() => {
    singleQuestion(id);
  }, [id, singleQuestion]);
  return (
    <div className="sidebar-meetup">
      <h3 className="meetup-heading">Top Questions</h3>
      <hr className='hr'/>
      {questions.map(question => (
       <a href='THE' className="sidebar-meetup">
         <div className="meetup-side-card">
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
        </div>
      </div>
       </a> 
      ))}    
    </div>
  );
};

const mapStateToProps = state => ({ questions: state.State.questions })

export default connect(
  mapStateToProps,
  { singleQuestion: getQuestions }
)(withRouter(SideBarQuestion));
