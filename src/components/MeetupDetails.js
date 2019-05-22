import React from "react";
import { Form, ButtonToolbar, Button } from "react-bootstrap";

const MeetupDetails = () => {
  return (
    <div className='meetup-details'>
      <img
        src="https://res.cloudinary.com/dz4wtphvf/image/upload/v1558108161/course1_urjbkq.jpg"
        alt="meet-up"
        className="meetup-image"
      />
      <hr />
      <h3 className='meetup-title'>Javascript In Nigeria</h3>
      <i className="fa fa-calendar meetup-icon" aria-hidden="true"> 27/06/2019 </i>
      <i className="fa fa-map-marker meetup-icon-two" aria-hidden="true"> Lekki </i>
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1" className='meetup-form'>
          <Form.Control as="textarea" rows="3"  className='meetup-textarea' placeholder='Questions...'/>
          <ButtonToolbar><Button variant="outline-secondary" className='meetup-button'>Ask</Button></ButtonToolbar>
        </Form.Group>
      </Form>
    </div>
  );
};

export default MeetupDetails;
