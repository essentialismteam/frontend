import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteProject, updateProject } from '../actions'

class Project extends Component {

  state = {
    project: '',
    userID: localStorage.getItem('userID'),
    editingProject: false
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      project: this.props.project
    })
  }


  handleChanges = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  updateProject = e => {
    e.preventDefault();
    const result = {
      project_name: this.state.project,
      id: this.props.projectID
    }
    this.props.updateProject(this.state.userID, result);
  };

  deleteProject = projID => {
    this.props.deleteProject(this.state.userID, { id: projID });
  };

  render() {
    return (
      <div>
        {/* if (this.state.editingProject) */}
        <div>
          <form onSubmit={this.updateProject}>
            <input
              type="text"
              name="project"
              placeholder=""
              onChange={this.handleChanges}
              value={this.state.project}
            />

            <button>
              Edit project
        </button>
          </form>
        </div>
        <div>
          <p>{this.props.project} <span onClick={() =>
            this.deleteProject(this.props.projectID)}>x</span></p>
        </div>
        <div>
        </div>
      </div>
    )
  }
}


export default connect(
  null,
  {
    deleteProject,
    updateProject
  }
)(Project);