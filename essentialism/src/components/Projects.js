import React, { Component } from 'react';
import { connect } from 'react-redux'

class Projects extends Component {
    render() {
        return (

            <h3>Projects</h3>

        )
    }

}


const mapStateToProps = (state) => {
    return { projects: state.userInfo.projects }
};

export default connect(
    mapStateToProps,
    {}
)(Projects);