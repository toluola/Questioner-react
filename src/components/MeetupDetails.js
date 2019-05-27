import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Form, ButtonToolbar, Button } from "react-bootstrap";
import { getSingleMeetup } from "../state/actions";

const MeetupDetails = ({ match, getOneMeetup, singleMeetup }) => {
  const { id } = match.params;
  useEffect(() => {
    getOneMeetup(id);
  }, [getOneMeetup, id]);
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
          <Form>
            <Form.Group
              controlId="exampleForm.ControlTextarea1"
              className="meetup-form"
            >
              <Form.Control
                as="textarea"
                rows="3"
                className="meetup-textarea"
                placeholder="Questions..."
              />
              <a href='thrnf' className='question-link'>View Questions</a>
              <ButtonToolbar>
                <Button variant="outline-secondary" className="meetup-button">
                  Ask
                </Button>
              </ButtonToolbar>
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

export default connect(
  mapStateToProps,
  { getOneMeetup: getSingleMeetup }
)(withRouter(MeetupDetails));
