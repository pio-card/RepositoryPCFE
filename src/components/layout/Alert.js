//10 create a component file - Alert.js RA 4.8
import React from "react";
import { connect } from "react-redux"; //RA 4.6. 1

import PropTypes from "prop-types"; //RA 4.8.1

//RA 4.8.3
const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));
//RA 4.8.2
Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert //coming from alert reducer
});
export default connect(mapStateToProps)(Alert);
