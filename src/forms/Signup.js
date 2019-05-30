/* eslint-disable react/prop-types */
import React from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as Yup from "yup";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import { userSignup } from "../state/actions";

const schema = Yup.object({
  firstname: Yup.string().required(),
  lastname: Yup.string().required(),
  email: Yup.string()
    .required()
    .email(),
  password: Yup.string()
    .required()
    .min("6")
    .trim()
});

export const SignupComponent = props => {
  const { loginState } = props;
  return (
    <Formik
      validationSchema={schema}
      onSubmit={values => props.userSignup(values)}
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        password: ""
      }}
    >
      {({ handleSubmit, handleChange, touched, values, errors }) => (
        <div className="signupForm form-field">
          <Form noValidate onSubmit={handleSubmit}>
            {loginState.errors.error && (
              <Alert variant="danger">{loginState.errors.error}</Alert>
            )}
            <Form.Group controlId="formBasicFirstname">
              <Form.Label className="form-label">Firstname</Form.Label>
              <Form.Control
                className="form-input"
                type="text"
                placeholder="Enter firstname"
                name="firstname"
                value={values.firstname}
                onChange={handleChange}
                isValid={touched.firstname && !errors.firstname}
                isInvalid={!!errors.firstname}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">
                Looks Good!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicLastname">
              <Form.Label className="form-label">Lastname</Form.Label>
              <Form.Control
                className="form-input"
                type="text"
                placeholder="Enter lastname"
                name="lastname"
                value={values.lastname}
                onChange={handleChange}
                isValid={touched.lastname && !errors.lastname}
                isInvalid={!!errors.lastname}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastname}
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">
                Looks Good!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="form-label">Email Address</Form.Label>
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
              {loginState.loadingState === "true" && (
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}
              Submit
            </Button>
            {loginState.loggedinUser.profile && <Redirect to='/' />}
          </Form>
        </div>
      )}
    </Formik>
  );
};

const mapStateToProps = state => ({ loginState: state.State });

export const Signup = connect(
  mapStateToProps,
  { userSignup }
)(SignupComponent);
