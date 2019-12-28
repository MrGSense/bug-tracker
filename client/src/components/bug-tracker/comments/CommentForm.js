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
    <div className='CommentForm'>
      {!isAuthenticated ? (
        <div className='CommentForm-conent'>
          <h1 className='CommentForm-header'>
            You must be signed in to comment on a bug
          </h1>
        </div>
      ) : (
        <div className='CommentForm-content'>
          <h1 className='CommentForm-header'>Leave a comment</h1>
          <form className='CommentForm-form' onSubmit={onSubmit}>
            <label className='CommentForm-label'>Comment</label>
            <input
              className='CommentForm-input'
              type='text'
              placeholder='Type your comment here'
              name='text'
              onChange={onChange}
              value={text}
            />
            <button className='CommentForm-submit'>Submit</button>
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
