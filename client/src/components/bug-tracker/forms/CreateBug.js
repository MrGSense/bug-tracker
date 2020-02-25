import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addBug } from "../../../actions/bug";
import { withRouter } from "react-router-dom";

const CreateBug = ({ addBug, history }) => {
  const [formData, setFormData] = useState({
    title: "",
    project: "",
    description: "",
    githubRepo: ""
  });

  const { title, project, description, githubRepo } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    addBug(formData, history);
  };

  return (
    <div className='page valign-wrapper green'>
      <div className='container'>
        <h1>Create bug</h1>
        <h3>Let's get some information on your bug</h3>
        <form
          className='card-panel green lighten-1'
          onSubmit={e => onSubmit(e)}
        >
          <div className='input-field'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              name='title'
              id='title'
              value={title}
              onChange={e => onChange(e)}
              required
            />
            <small>Choose a title that generally describes your bug</small>
          </div>
          <div className='input-field'>
            <label htmlFor='project'>Project</label>
            <input
              type='text'
              name='project'
              id='project'
              value={project}
              onChange={e => onChange(e)}
              required
            />
            <small>The name of the project in which the bug occurs</small>
          </div>
          <div className='input-field'>
            <label htmlFor='description'>Description</label>
            <textarea
              type='text'
              name='description'
              id='description'
              value={description}
              onChange={e => onChange(e)}
              required
            />
            <small>Describe your bug the best you can</small>
          </div>
          <div className='input-field'>
            <label htmlFor='githubRepo'>Github Repository</label>
            <input
              type='text'
              name='githubRepo'
              id='githubRepo'
              value={githubRepo}
              onChange={e => onChange(e)}
            />
            <small>
              If you want copy the link to the repository this bug is in
            </small>
          </div>
          <input
            type='submit'
            className='waves-effect waves-light btn green darken-1'
            value='Submit'
          />
        </form>
      </div>
    </div>
  );
};

CreateBug.propTypes = {
  addBug: PropTypes.func.isRequired
};

export default connect(null, { addBug })(withRouter(CreateBug));
