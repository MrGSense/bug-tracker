import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getBugs } from "../../../actions/bug";

const Bugs = ({ bugs, getBugs }) => {
  useEffect(() => {
    getBugs();
  }, [getBugs]);

  return <div className='bugsPage'></div>;
};

Bugs.propTypes = {
  bugs: PropTypes.array.isRequired,
  getBugs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  bugs: state.bugs
});

export default connect(mapStateToProps, { getBugs })(Bugs);
