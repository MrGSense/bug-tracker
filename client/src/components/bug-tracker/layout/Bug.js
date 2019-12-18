import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getBug } from "../../../actions/bug";

const Bug = ({ bug, auth, getBug }) => {
  useEffect(() => {
    getBug(match.params.id);
  }, [getBug]);

  return <div className='bugPage'></div>;
};

Bug.propTypes = {
  bug: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  getBug: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  bug: state.bug,
  auth: state.auth
});

export default connect(mapStateToProps, { getBug })(Bug);
