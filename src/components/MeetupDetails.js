import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { getSingleMeetup, postQuestion } from "../state/actions";

export const Meetup = ({ match, getOneMeetup, singleMeetup, question }) => {
  const { id } = match.params;
  useEffect(() => {
    getOneMeetup(id);
  }, [getOneMeetup, id]);
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
    await question(id, { body });
    setTextareaData(() => ({ body: "" }));
  };
  return (
    <div className="meetup-details">
      {singleMeetup.map(meetup => (
        <div>
          <img
            src="https://res.cloudinary.com/dz4wtphvf/image/upload/v1558108161/course1_urjbkq.jpg"
            alt="meet-up"
            className="meetup-image"
          />
          <hr />
          <h3 className="meetup-title">{meetup.topic}</h3>
          <i className="fa fa-calendar meetup-icon" aria-hidden="true">
            {" "}
            {meetup.happening_on}
          </i>
          <i className="fa fa-map-marker meetup-icon-two" aria-hidden="true">
            {" "}
            {meetup.location}
          </i>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              controlId="exampleForm.ControlTextarea1"
              className="meetup-form"
            >
              <Form.Control
                as="textarea"
                rows="3"
                className="meetup-textarea"
                placeholder="Questions..."
                onChange={handleChange}
                name="body"
                value={body}
              />
              <a href={`${meetup.id}/questions`} className="question-link">
                View Questions
              </a>
              <Button
                variant="outline-secondary"
                className="meetup-button"
                type="submit"
              >
                Ask
              </Button>
            </Form.Group>
          </Form>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  singleMeetup: state.State.singleMeetup
});

export const  MeetupDetails = connect(
  mapStateToProps,
  { getOneMeetup: getSingleMeetup, question: postQuestion }
)(withRouter(Meetup));
