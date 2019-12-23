import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BugItem = ({ bug }) => {
  const bugUrl = `/bug/${bug._id}`;

  return (
    <div className='BugItem'>
      <div className='BugItem-content'>
        <h1 className='BugItem-title'>Bug: {bug.title}</h1>
        <h1 className='BugItem-author'>User: {bug.author}</h1>
        <h2 className='BugItem-project'>Project: {bug.project}</h2>
      </div>
      <div className='BugItem-links'>
        <Link to={bugUrl} className='BugItem-link'>
          See more
        </Link>
      </div>
    </div>
  );
};

BugItem.propTypes = {
  bug: PropTypes.object.isRequired
};

export default BugItem;
