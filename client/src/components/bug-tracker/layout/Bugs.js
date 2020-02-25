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
    <div className='page valign-wrapper green'>
      <div className='container'>
        <div>
          <h1>Explore Bugs</h1>
          <h4>
            Find some bugs or post your own bugs or maybe even comment on a bug
            you may have a fix for!
          </h4>
          <div className='row'>
            {bugs.map(bug => (
              <BugItem key={bug._id} bug={bug} />
            ))}
          </div>
        </div>
        <Link
          to='/bugs/create'
          className='waves-effect waves-light btn green darken-1'
        >
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
