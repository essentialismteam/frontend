import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Project } from '../components';

import { addProject } from '../actions'


class Projects extends Component {
    state = {
        userID: localStorage.getItem('userID'),
        project: ''
    };

    handleChange = e => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        }
        );
    };

    addProject = e => {
        e.preventDefault();
        this.props
            .addProject(this.state.userID, { project_name: this.state.project })
            .then(() => this.setState({
                ...this.state,
                project: ''
            }))
    }
    render() {

        return (
            <div>
                <h3>Projects</h3>
                {this.props.projects.map(e =>
                    <Project
                        key={e.id}
                        project={e.project}
                        projectID={e.id}
                    />
                )}
                <div>
                    <form onSubmit={(e) => this.addProject(e)}>
                        <label htmlFor='project'>add project</label>
                        <input
                            type='text'
                            name='project'
                            placeholder='Project Name'
                            value={this.state.project}
                            onChange={this.handleChange}
                        />
                    </form>
                </div>
            </div>

        )
    }

}


const mapStateToProps = (state) => {
    return { projects: state.userInfo !== {} ? state.userInfo.projects : {} }
};

export default connect(
    mapStateToProps,
    { addProject }
)(Projects);