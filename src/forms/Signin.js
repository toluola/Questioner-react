/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from "react";
import { Formik } from "formik";
import { connect } from 'react-redux';
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";
import { userSignin } from '../state/actions';

const schema = Yup.object({
  email: Yup.string().required().email(),
  password: Yup.string().required().min('6').trim(),

});

const Signin = props => { 
  return (
    <Formik
      validationSchema={schema}
      onSubmit = {(values) => props.userSignin(values)}
      initialValues={{
        email: "",
        password: ""
      }}
    >
      {({ handleSubmit, handleChange, touched, values, errors }) => (
        <div className="container form-field">
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="form-label">Email address</Form.Label>
              <Form.Control
                className="form-input"
                type="email"
                placeholder="Enter email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
                isInvalid={!!errors.email}
              />
              <Form.Text className="text-muted">
                We will never share your email with anyone else.
              </Form.Text>
              <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                  Looks Good!
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="form-label">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="form-input"
                name="password"
                value={values.password}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                  Looks Good!
                </Form.Control.Feedback>
            </Form.Group>
            <Button className="form-button" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default connect(null, { userSignin })(Signin)
