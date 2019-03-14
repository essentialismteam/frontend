import React, { Component } from 'react';


class Project extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <p>{this.props.project}</p>
      </div>
    )
  }
}

export default Project;