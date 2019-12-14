import React, { Component } from 'react';

class BugForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            project: "",
            description: ""
        }
    }

    render() {
        return (
            <div className="BugForm">
                <form className="BugForm-form">
                    <div classname="BugForm-div">
                        <label className ="BugForm-label">Title:</label>
                        <input className="BugForm-input" placeholder="Title your bug"/>
                    </div>
                    <div classname="BugForm-div">
                        <label className ="BugForm-label">Project:</label>
                        <input className="BugForm-input" placeholder="Project name"/>
                    </div>
                    <div classname="BugForm-div">
                        <label className ="BugForm-label">Description:</label>
                        <textarea className="BugForm-textarea" placeholder="Description"/>
                    </div>
                    <button className="BugForm-button">Submit</button>
                </form>
            </div>
        )
    }
}

export default BugForm;