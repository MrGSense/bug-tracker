import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const CommentItem = ({ comment, auth }) => {
  return (
    <div className='CommentItem'>
      <div className='CommentItem-content'>
        <h3>{comment.author}</h3>
        <p>{comment.text}</p>
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired
};

export default connect()(CommentItem);
