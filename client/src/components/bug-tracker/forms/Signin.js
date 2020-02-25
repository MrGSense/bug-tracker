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
    return <Redirect to='/bugs' />;
  }

  return (
    <div className='page valign-wrapper green'>
      <div className='container'>
        <h1>Sign in</h1>
        <Link
          to='/signup'
          className='waves-effect waves-light btn green darken-1'
        >
          Go to Sign up page
        </Link>
        <h3>Login to your account</h3>
        <form
          className='card-panel green lighten-1'
          onSubmit={e => onSubmit(e)}
        >
          <div className='input-field'>
            <label htmlFor='email'>Email address</label>
            <input
              type='text'
              name='email'
              id='email'
              value={email}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              value={password}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <input
            type='submit'
            className='waves-effect waves-light btn green darken-1'
            value='Sign in'
          />
        </form>
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
