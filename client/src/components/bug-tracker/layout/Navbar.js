import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/bugs' className='Navbar-link'>
          Bugs
        </Link>
      </li>
      <li>
        <Link to='/about' className='Navbar-link'>
          About
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!' className='Navbar-link'>
          Log out
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/bugs' className='Navbar-link'>
          Bugs
        </Link>
      </li>
      <li>
        <Link to='/about' className='Navbar-link'>
          About
        </Link>
      </li>
      <li>
        <Link to='/signup' className='Navbar-link'>
          Sign up
        </Link>
      </li>
      <li>
        <Link to='/signin' className='Navbar-link'>
          Sign in
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className='Navbar'>
      <h1 className='Navbar-brand'>
        <Link to='/' className='Navbar-link'>
          Bug Tracker
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  auth: state.auth;
};

export default connect(mapStateToProps, { logout })(Navbar);
