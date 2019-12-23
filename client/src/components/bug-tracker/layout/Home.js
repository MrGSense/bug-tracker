import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='homePage'>
      <div className='homePage-content'>
        <h1 className='homePage-header'>Welcome to Bug Tracker</h1>
        <p className='homePage-lead'>
          Where you can share your coding bugs and get some input!
        </p>
        <div className='homePage-links'>
          <Link to='/bugs' className='homePage-link'>
            View Bugs
          </Link>
          <Link to='/signup' className='homePage-link'>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
