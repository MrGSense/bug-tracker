import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addBug, getBug } from "../../../actions/bug";
import { withRouter } from "react-router-dom";

const CreateBug = ({ addBug, getBug, bug: { bug, loading }, history }) => {
  const [formData, setFormData] = useState({
    title: "",
    project: "",
    description: "",
    githubRepo: ""
  });

  useEffect(() => {
    getBug(params.id);

    setFormData(
      {
        title: loading || !bug.title ? "" : bug.title,
        description: loading || !bug.description ? "" : bug.description,
        project: loading || !bug.project ? "" : bug.project,
        githubRepo: loading || !bug.githubRepo ? "" : bug.githubRepo
      },
      [loading, getBug]
    );
  });

  const { title, project, description, githubRepo } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <div className='editbugPage'>
      <div className='editbugPage-content'>
        <h1 className='editbugPage-header'>Create bug</h1>
        <p className='editbugPage-lead'>
          Let's get some information on your bug
        </p>
      </div>
      <form className='editbugPage-form' onSubmit={e => onSubmit(e)}>
        <div className='editbugPage-formgroup'>
          <label className='editbugPage-label'>Title</label>
          <input
            className='editbugPage-input'
            type='text'
            placeholder='Title'
            name='title'
            value={title}
            onChange={e => onChange(e)}
            required
          />
          <small className='editbugPage-form-text'>
            Choose a title that generally describes your bug
          </small>
        </div>
        <div className='editbugPage-formgroup'>
          <label className='editbugPage-label'>Project</label>
          <input
            className='editbugPage-input'
            type='text'
            placeholder='Project'
            name='project'
            value={project}
            onChange={e => onChange(e)}
            required
          />
          <small className='editbugPage-form-text'>
            The name of the project in which the bug occurs
          </small>
        </div>
        <div className='editbugPage-formgroup'>
          <label className='editbugPage-label'>Description</label>
          <textarea
            className='editbugPage-textarea'
            type='text'
            placeholder='Description'
            name='description'
            value={description}
            onChange={e => onChange(e)}
            required
          />
          <small className='editbugPage-form-text'>
            Describe your bug the best you can
          </small>
        </div>
        <div className='editbugPage-formgroup'>
          <label className='editbugPage-label'>Github Repository</label>
          <input
            className='editbugPage-input'
            type='text'
            placeholder='Github Repository'
            name='githubRepo'
            value={githubRepo}
            onChange={e => onChange(e)}
          />
          <small className='editbugPage-form-text'>
            If you want copy the link to the repository this bug is in
          </small>
        </div>
        <input type='submit' className='editbugPage-submit' value='Submit' />
      </form>
    </div>
  );
};

CreateBug.propTypes = {
  addBug: PropTypes.func.isRequired,
  getBug: PropTypes.func.isRequired,
  bug: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  bug: state.bug
});

export default connect(mapStateToProps, { addBug, getBug })(
  withRouter(CreateBug)
);
