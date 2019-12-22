import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { login } from "../../../actions/auth";
import PropTypes from "prop-types";

const Signin = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <div className='signinPage'>
      <div className='signinPage-conent'>
        <h1 className='signinPage-header'>Sign in</h1>
        <p className='signinPage-lead'>Login to your account</p>
        <form className='signinPage-form' onSubmit={e => onSubmit(e)}>
          <div className='signinPage-formgroup'>
            <input
              className='signinPage-input'
              type='text'
              placeholder='Email address'
              name='email'
              value={email}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className='signinPage-formgroup'>
            <input
              className='signinPage-input'
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <input type='submit' className='signinPage-submit' value='Sign in' />
        </form>
        <Link to='/signup' className='signinPage-link'>
          Go to Sign up page
        </Link>
      </div>
    </div>
  );
};

Signin.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Signin);
