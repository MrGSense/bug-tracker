import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
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
    return <Redirect to='/' />;
  }

  return (
    <div className='signupPage'>
      <div className='signupPage-conent'>
        <h1 className='signupPage-header'>Sign up</h1>
        <p className='signupPage-lead'>Create your account</p>
        <form className='signupPage-form' onSubmit={e => onSubmit(e)}>
          <div className='signupPage-formgroup'>
            <label className='signupPage-label'>Name</label>
            <input
              className='signupPage-input'
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className='signupPage-formgroup'>
            <label className='signupPage-label'>Email address</label>
            <input
              className='signupPage-input'
              type='text'
              placeholder='Email address'
              name='email'
              value={email}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className='signupPage-formgroup'>
            <label className='signupPage-label'>Password</label>
            <input
              className='signupPage-input'
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className='signupPage-formgroup'>
            <label className='signupPage-label'>Confirm password</label>
            <input
              className='signupPage-input'
              type='password'
              placeholder='Confirm password'
              name='password2'
              value={password2}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <input type='submit' className='signupPage-submit'>
            Sign up
          </input>
        </form>
      </div>
    </div>
  );
};

Signin.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(Signup);
