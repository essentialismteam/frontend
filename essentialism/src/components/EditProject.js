import React, { Component } from 'react';

class editProject extends Component {
  state = {
    project: this.props.friend
  };

  handleChanges = e => {
    let value = e.target.value;
    if (e.target.name === 'age') {
      value = parseInt(value, 10);
    }

    this.setState({
      project: {
        ...this.state.project,
        [e.target.name]: value
      }
    });
  };

  editProject = e => {
    this.props.editProject(e, this.state.project);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.editProject}>
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
    );
  }
}

export default EditProject;