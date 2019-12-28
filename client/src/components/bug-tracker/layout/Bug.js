import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getBug } from "../../../actions/bug";
import CommentForm from "../comments/CommentForm";
import CommentItem from "../comments/CommentItem";

const Bug = ({ bug: { bug, loading }, auth, getBug, match }) => {
  useEffect(() => {
    getBug(match.params.id);
  }, [getBug, match.params.id]);

  const onClick = () => {
    console.log(bug);
  };

  return (
    <div className='bugPage'>
      <Link to='/bugs' className='bugsPage-link'>
        Back to Bugs
      </Link>
      {bug === null || loading ? (
        <h1 className='bugPage-title'>Loading</h1>
      ) : (
        <div className='bugPage-content'>
          <h1 className='bugPage-title'>Title: {bug.title}</h1>
          <h2 className='bugPage-project'>Project: {bug.project}</h2>
          <h2 className='bugPage-author'>Author: {bug.author}</h2>
          <p className='bugPage-description'>Description: {bug.description}</p>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === bug.user && (
              <Link to={`/bug/edit/${bug._id}`} className='bugPage-link'>
                Edit Bug
              </Link>
            )}
          <div className='bugPage-comments'>
            <h2 className='bugsPage-project'>Comments</h2>
            {auth.isAuthenticated && auth.loading === false && (
              <CommentForm bug={bug} />
            )}
            {bug.comments.map(comment => (
              <CommentItem comment={comment} />
            ))}
          </div>
        </div>
      )}
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
