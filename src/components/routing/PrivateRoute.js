// create a new component file - PrivateRoute.js RA 4.8
import React from "react";
import { Route, Redirect } from "react-router-dom";

import PropTypes from "prop-types";

import { connect } from "react-redux"; //RA 4.6. 1

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated && !loading ? (
        <Redirect to="/login" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth //all the states in the auth reducer
});
export default connect(
  //RA 4.7.2
  mapStateToProps //action list
)(PrivateRoute);
