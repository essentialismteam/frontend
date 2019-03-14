import React, { Component } from 'react';
import { connect } from 'react-redux';

class Project extends Component {
  constructor(props) {
    super(props)
  }

  deleteProject = id => {
    this.props.deleteProject(id);
  };

  render() {
    return (
      <div>
        <div>
          <p>{this.props.project} <span>x</span></p>
        </div>
        <div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ deleteProject }) => ({
  deleteProject
})
export default connect(
  mapStateToProps,
  { deleteProject }
)(Project);