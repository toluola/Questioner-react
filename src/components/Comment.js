import React, { useEffect, useState } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { Form, ButtonToolbar, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { getComments, postComment } from "../state/actions";

const Comment = ({ getQuestionComment, match, comments, commentPost }) => {
  const { questionId } = match.params;
  useEffect(() => {
    getQuestionComment(questionId);
  }, [getQuestionComment, questionId]);

  const [textareaData, setTextareaData] = useState({
    body: ""
  });

  const handleChange = event => {
    event.persist();
    setTextareaData(() => ({
      ...textareaData,
      [event.target.name]: event.target.value
    }));
  };

  const { body } = textareaData;

  const handleSubmit = async event => {
    event.preventDefault();
    if (!body.trim()) return;
    await commentPost(questionId, { body });
    await getQuestionComment(questionId);
    setTextareaData(() => ({ body: "" }));
  };
  return (
    <div>
      <div className="space">{"    "}</div>
      {(
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
              {moment(comment.created_at).fromNow()}
            </p>
          </div>
        ))
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Control
          as="textarea"
          rows="2"
          className="comment-textarea"
          placeholder="comments..."
          onChange={handleChange}
          name="body"
          value={body}
        />
        <ButtonToolbar>
          <Button
            variant="outline-secondary"
            className="comment-button"
            type="submit"
          >
            comment
          </Button>
        </ButtonToolbar>
      </Form>
    </div>
  );
};

const mapStateToProps = state => ({ comments: state.State.comments });

export default connect(
  mapStateToProps,
  { getQuestionComment: getComments, commentPost: postComment }
)(withRouter(Comment));
