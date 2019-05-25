import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { getQuestions } from "../state/actions";

const SideBarQuestion = ({ match, singleQuestion }) => {
  const { id } = match.params;
  useEffect(() => {
    singleQuestion(id);
  }, [id, singleQuestion]);
  return (
    <div className="sidebar-meetup">
      <h3 className="meetup-heading">Top Questions</h3>
      <hr />
      <div className="meetup-side-card">
        <div>
          <i className="fa fa-arrow-up meetup-arrow" aria-hidden="true">
            23
          </i>
          <i className="fa fa-arrow-down meetup-arrow" aria-hidden="true">
            23
          </i>
          <i className="fa fa-comments meetup-arrow" aria-hidden="true">
            23
          </i>
        </div>
        <div>
          <p className="meetup-side-content">When is the Meetup Starting</p>
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  { singleQuestion: getQuestions }
)(withRouter(SideBarQuestion));
