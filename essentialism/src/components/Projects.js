import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Project } from '../components';

class Projects extends Component {
    render() {

        return (
            <div>
                <h3>Projects</h3>
                {this.props.projects.map(e =>

                    <Project
                        key={e.id}
                        project={e.project}
                    />

                )}
            </div>

        )
    }

}


const mapStateToProps = (state) => {
    return { projects: state.userInfo !== {} ? state.userInfo.projects : [] }
};

export default connect(
    mapStateToProps,
    {}
)(Projects);