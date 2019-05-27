import React from "react";
import { Form, ButtonToolbar, Button } from "react-bootstrap";

const AddComment = () => {
  return (
    <Form>
      <Form.Control
        as="textarea"
        rows="3"
        className="comment-textarea"
        placeholder="comments..."
      />
      <ButtonToolbar>
        <Button variant="outline-secondary" className="comment-button">
          comment
        </Button>
      </ButtonToolbar>
    </Form>
  );
};

export default AddComment;
