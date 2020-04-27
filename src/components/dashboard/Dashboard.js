// create a new component file - Dashboard.js RA 4.8
import React, { useEffect } from "react";

import { connect } from "react-redux"; //RA 4.6. 1

import PropTypes from "prop-types";

import { getCurrentProfile } from "../../actions/profile";

const Dashboard = ({ getCurrentProfile, auth, profile }) => {
  //React hook
  useEffect(() => {
    getCurrentProfile();
  }, []);
  return <div>Dashboard </div>;
};
Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth, //coming from the profile reducer
  profile: state.profile
});

export default connect(
  //RA 4.7.2
  mapStateToProps, //mapStateToProps
  { getCurrentProfile } //action list
)(Dashboard);
