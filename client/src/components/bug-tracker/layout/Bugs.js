import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getBugs } from "../../../actions/bug";
import BugItem from "../bugs/BugItem";

const Bugs = ({ bugs, getBugs }) => {
  useEffect(() => {
    getBugs();
  }, [getBugs]);

  return (
    <div className='bugsPage'>
      <div className='bugsPage-content'>
        <h1 className='bugsPage-header'>Explore Bugs</h1>
        <p className='bugsPage-lead'>
          Find some bugs or post your own bugs or maybe even comment on a bug
          you may have a fix for!
        </p>
        <div className='bugsPage-list'>
          {bugs.map(bug => (
            <BugItem key={bug._id} bug={bug} />
          ))}
        </div>
      </div>
      <Link to='/bugs/create' className='bugsPage-link'>
        Create a new bug
      </Link>
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
