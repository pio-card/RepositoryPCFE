//7.2 - create component auth file - Register.js
import React, { Fragment, useState } from "react";
import { connect } from "react-redux"; //RA 4.6. 1
import { Link, Redirect } from "react-router-dom";

import PropTypes from "prop-types"; //RA 4.8.1
//RA 4.7.1
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";

import axios from "axios";
axios.defaults.baseURL = `https://q0ssb.sse.codesandbox.io`; //proxy in package.json not working
//RA 4.7.3
const Register = ({ setAlert, register, isAuthenticated }) => {
  //set initial states and update state function with hooks
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });
  const { name, email, password, password2 } = formData; //deconstruct
  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      //RA 4.7.4 pass args: msg and alert-type for css
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  //redirect user if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Fragment>
  );
};
//RA 4.8.2
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated //coming from the auth reducer
});
//RA 4.6.2
export default connect(
  //RA 4.7.2
  mapStateToProps, //mapStateToProps
  { setAlert, register } //action list
)(Register);
