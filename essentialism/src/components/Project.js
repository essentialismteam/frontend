import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteProject } from '../actions'

class Project extends Component {
  constructor(props) {
    super(props)
  }

  deleteProject = projID => {
    const userID = localStorage.getItem('userID');
    this.props.deleteProject(userID, { id: projID });
  };

  render() {
    return (
      <div>
        <div>
          <p>{this.props.project} <span onClick={() => this.deleteProject(this.props.projectID)}>x</span></p>
        </div>
        <div>

        </div>
      </div>
    )
  }
}


export default connect(
  null,
  { deleteProject }
)(Project);