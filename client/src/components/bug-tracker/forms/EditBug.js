import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addBug, getBug } from "../../../actions/bug";
import { withRouter } from "react-router-dom";

const initialState = {
  title: "",
  description: "",
  project: "",
  githubRepo: ""
};

const CreateBug = ({
  addBug,
  getBug,
  bug: { bug, loading },
  history,
  match
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!bug) getBug(match.params.id);
    if (!loading) {
      const bugData = { ...initialState };

      for (const key in bug) {
        if (key in bugData) bugData[key] = bug[key];
      }

      setFormData(bugData);
    }
  }, [loading, getBug, bug]);

  const { title, project, description, githubRepo } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    addBug(formData, history, true);
  };

  return (
    <div className='page valign-wrapper green'>
      <div className='container'>
        <h1>Edit bug</h1>
        <h3>Update the information on your bug</h3>
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
