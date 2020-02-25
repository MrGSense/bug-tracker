import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BugItem = ({ bug }) => {
  const bugUrl = `/bug/${bug._id}`;

  return (
    // <div className='BugItem'>
    //   <div className='BugItem-content'>
    //     <h1 className='BugItem-title'>Bug: {bug.title}</h1>
    //     <h1 className='BugItem-author'>User: {bug.author}</h1>
    //     <h2 className='BugItem-project'>Project: {bug.project}</h2>
    //   </div>
    //   <div className='BugItem-links'>
    //     <Link to={bugUrl} className='BugItem-link'>
    //       See more
    //     </Link>
    //   </div>
    // </div>

    <div className='col s12 m6 l4'>
      <div className='card small green lighten-1 hoverable'>
        <div className='card-content'>
          <h4 className='card-title'>{bug.project}</h4>
          <h5>{bug.title}</h5>
        </div>
        <div className='card-action'>
          <p>{bug.author}</p>
          <Link
            to={bugUrl}
            className='waves-effect waves-light btn green darken-1'
          >
            See more
          </Link>
        </div>
      </div>
    </div>
  );
};

BugItem.propTypes = {
  bug: PropTypes.object.isRequired
};

export default BugItem;
