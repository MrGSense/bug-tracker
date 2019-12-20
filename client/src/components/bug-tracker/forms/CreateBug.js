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
    createProfile(formData, history);
  };

  return (
    <div className='createbugPage'>
      <div className='createbugPage-content'>
        <h1 className='createbugPage-header'>Create bug</h1>
        <p className='createbugPage-lead'>
          Let's get some information on your bug
        </p>
      </div>
      <form className='createbugPage-form' onSubmit={e => onSubmit(e)}>
        <div className='createbugPage-formgroup'>
          <label className='createbugPage-label'>Title</label>
          <input
            className='createbugPage-input'
            type='text'
            placeholder='Title'
            name='title'
            value={title}
            onChange={e => onChange(e)}
            required
          />
          <small className='createbugPage-form-text'>
            Choose a title that generally describes your bug
          </small>
        </div>
        <div className='createbugPage-formgroup'>
          <label className='createbugPage-label'>Project</label>
          <input
            className='createbugPage-input'
            type='text'
            placeholder='Project'
            name='project'
            value={project}
            onChange={e => onChange(e)}
            required
          />
          <small className='createbugPage-form-text'>
            The name of the project in which the bug occurs
          </small>
        </div>
        <div className='createbugPage-formgroup'>
          <label className='createbugPage-label'>Description</label>
          <textarea
            className='createbugPage-textarea'
            type='text'
            placeholder='Description'
            name='description'
            value={description}
            onChange={e => onChange(e)}
            required
          />
          <small className='createbugPage-form-text'>
            Describe your bug the best you can
          </small>
        </div>
        <div className='createbugPage-formgroup'>
          <label className='createbugPage-label'>Github Repository</label>
          <input
            className='createbugPage-input'
            type='text'
            placeholder='Github Repository'
            name='githubRepo'
            value={githubRepo}
            onChange={e => onChange(e)}
          />
          <small className='createbugPage-form-text'>
            If you want copy the link to the repository this bug is in
          </small>
        </div>
        <input type='submit' className='createbugPage-submit' value='Submit' />
      </form>
    </div>
  );
};

CreateBug.propTypes = {
  addBug: PropTypes.func.isRequired
};

export default connect(null, { addBug })(withRouter(CreateBug));
