import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getBugs } from "../../../actions/bug";

const Bugs = ({ bugs, getBugs }) => {
  useEffect(() => {
    getBugs();
  }, [getBugs]);

  return (
    <div className='bugsPage'>
      <div className='bugsPage-content'>
        <Link to='/bugs/create' className='bugsPage-link'>
          Create a new bug
        </Link>
      </div>
    </div>
  );
};

Bugs.propTypes = {
  bugs: PropTypes.array.isRequired,
  getBugs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  bugs: state.bug.bugs
});

export default connect(mapStateToProps, { getBugs })(Bugs);
