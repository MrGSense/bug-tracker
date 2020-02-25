import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { register } from "../../../actions/auth";
import PropTypes from "prop-types";

const Signup = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      alert("Passwords do not match");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/bugs' />;
  }

  return (
    <div className='page valign-wrapper green'>
      <div className='container'>
        <h1>Sign up</h1>
        <Link
          to='/signin'
          className='waves-effect waves-light btn green darken-1'
        >
          Go to Sign in page
        </Link>
        <h3>Create your account</h3>
        <form
          className='card-panel green lighten-1'
          onSubmit={e => onSubmit(e)}
        >
          <div className='input-field'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              id='name'
              value={name}
              onChange={e => onChange(e)}
              required
            />
          </div>
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
          <div className='input-field'>
            <label htmlFor='password2'>Confirm password</label>
            <input
              type='password'
              name='password2'
              id='password2'
              value={password2}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <input
            type='submit'
            className='waves-effect waves-light btn green darken-1'
            value='Sign up'
          />
        </form>
      </div>
    </div>
  );
};

Signup.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(Signup);
