import React, { useEffect } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getComments } from "../state/actions";
import AddComment from "./AddComment";

const Comment = ({ getQuestionComment, match, comments }) => {
  const { questionId } = match.params;
  useEffect(() => {
    getQuestionComment(questionId);
  }, [getQuestionComment, questionId]);
  return (
    <div>
      <div className="space">{"    "}</div>
      {comments[0] ? (
        comments.map(comment => (
          <div className="comment-container">
            <img
              src="https://res.cloudinary.com/dz4wtphvf/image/upload/v1558959139/Tolu_gmfizh.jpg"
              alt="profile"
              width="25px"
              className="comment-image"
            />
            <span className="comment-body">{comment.body}</span>
            <p className="comment-date">
              {moment(comment.created_on).fromNow()}
            </p>
          </div>
        ))
      ) : (
        <h1 className="no-comment">
          {" "}
          No Comments on this Question yet...Please Add a Comment
        </h1>
      )}
      <AddComment />
    </div>
  );
};

const mapStateToProps = state => ({ comments: state.State.comments });

export default connect(
  mapStateToProps,
  { getQuestionComment: getComments }
)(withRouter(Comment));
