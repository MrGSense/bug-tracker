import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../../actions/bug";

const CommentForm = ({ auth: { isAuthenticated }, bug, addComment }) => {
  const [formData, setFormData] = useState({
    text: ""
  });

  const { text } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    addComment(bug._id, formData);
  };

  return (
    <div className='card-panel green lighten-1'>
      {!isAuthenticated ? (
        <div>
          <h3>You must be signed in to comment on a bug</h3>
        </div>
      ) : (
        <div>
          <h3>Leave a comment</h3>
          <form onSubmit={onSubmit}>
            <div className='input-field'>
              <label for='text'>Comment</label>
              <input
                className='validate'
                type='text'
                placeholder='Type your comment here'
                name='text'
                id='text'
                onChange={onChange}
                value={text}
              />
            </div>
            <button className='waves-effect waves-light btn green darken-1'>
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

CommentForm.propTypes = {
  bug: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addComment })(CommentForm);
