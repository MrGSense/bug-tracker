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
    <div className='page valign-wrapper green'>
      <div className='container'>
        {bug === null || loading ? (
          <h1>Loading</h1>
        ) : (
          <div>
            <div className='section'>
              <div className='card large green lighten-1'>
                <div className='card-content'>
                  <h1>
                    {bug.project} by {bug.author}
                  </h1>
                  <h2>{bug.title}</h2>
                  <h4>{bug.description}</h4>
                  {auth.isAuthenticated &&
                    auth.loading === false &&
                    auth.user._id === bug.user && (
                      <Link
                        to={`/bug/${bug._id}/edit`}
                        className='waves-effect waves-light btn green darken-1'
                      >
                        Edit Bug
                      </Link>
                    )}
                </div>
              </div>
            </div>
            <div className='section'>
              <h1>Comments:</h1>
              {auth.isAuthenticated && auth.loading === false && (
                <CommentForm bug={bug} />
              )}
              {bug.comments.map(comment => (
                <CommentItem key={comment.date} comment={comment} />
              ))}
            </div>
          </div>
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
