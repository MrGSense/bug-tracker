import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const CommentItem = ({ comment, auth }) => {
  return (
    <div className='card-panel green lighten-1'>
      <h4>{comment.author}</h4>
      <h6>{comment.text}</h6>
    </div>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired
};

export default connect()(CommentItem);
