import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className='right'>
      <li>
        <Link to='/bugs'>Bugs</Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          Log out
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className='right'>
      <li>
        <Link to='/bugs'>Bugs</Link>
      </li>
      <li>
        <Link to='/signup'>Sign up</Link>
      </li>
      <li>
        <Link to='/signin'>Sign in</Link>
      </li>
    </ul>
  );

  return (
    <nav>
      <div className='nav-wrapper green darken-4'>
        <Link to='/' className='brand-logo left'>
          Bug Tracker
        </Link>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
