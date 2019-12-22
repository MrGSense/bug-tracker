import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BugItem = ({ bug }) => {
  const bugUrl = `/bug/${bug._id}`;

  return (
    <div className='BugItem'>
      <h1>{bug.title}</h1>
      <h2>{bug.project}</h2>
      <Link to={bugUrl}>See more</Link>
    </div>
  );
};

BugItem.propTypes = {
  bug: PropTypes.object.isRequired
};

export default BugItem;
