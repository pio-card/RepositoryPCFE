//7.1 - create component auth file - Login.js
import React, { Fragment, useState } from "react";
import { connect } from "react-redux"; //RA 4.6. 1
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types"; //RA 4.8.1

import { login } from "../../actions/auth";

import axios from "axios";
axios.defaults.baseURL = `https://q0ssb.sse.codesandbox.io`; //proxy in package.json not working

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { email, password } = formData; //destruct
  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const onSubmit = async e => {
    e.preventDefault();
    login({ email, password });
  };

  //redirect user if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign Into Your Account
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            minLength="6"
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Fragment>
  );
};
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated //coming from the auth reducer
});

export default connect(
  //RA 4.7.2
  mapStateToProps, //mapStateToProps
  { login } //action list
)(Login);
