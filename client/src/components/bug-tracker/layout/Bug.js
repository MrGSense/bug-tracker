import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getBug } from "../../../actions/bug";

const Bug = ({ bug, auth, getBug, match }) => {
  useEffect(() => {
    getBug(match.params.id);
  }, [getBug, match.params.id]);

  const bugEditUrl = `/bug/edit/${bug._id}`;

  return (
    <div className='bugPage'>
      <Link to='/bugs' className='bugsPage-link'>
        Back to Bugs
      </Link>
      <div className='bugPage-bug'>
        <h1>{bug.title}</h1>
        <h2>{bug.project}</h2>
        <p>{bug.description}</p>
        {auth.isAuthenticated &&
          auth.loading === false &&
          auth.user._id === bug.user && (
            <Link to={bugEditUrl} className='bugsPage-link'>
              Edit Bug
            </Link>
          )}
      </div>
    </div>
  );
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
