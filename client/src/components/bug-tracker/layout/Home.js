import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='page valign-wrapper green'>
      <div className='container'>
        <h1>Welcome to Bug Tracker</h1>
        <h4>Where you can share your coding bugs and get some input!</h4>
        <div class='row'>
          <Link
            to='/bugs'
            className='col s4 waves-effect waves-light btn green darken-1'
          >
            View Bugs
          </Link>
          <Link
            to='/signup'
            className='col s4 push-s2 offset-s2 waves-effect waves-light btn green darken-1'
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
