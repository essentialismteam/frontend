import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Projects, Values } from '../components'

import { getUserInfo } from '../actions';

class Dashboard extends Component {
    state = {
        id: localStorage.getItem('userID')
    }

    componentDidMount() {
        this.props.getUserInfo(this.state.id);
    }

    render() {
        return (
            <div>
                <h2>Dashboard</h2>
                <div>
                    <Projects />
                    <Values />
                </div>
            </div>
        );
    };
}

const mapStateToProps = ({ getUserInfo }) => ({ getUserInfo });

export default connect(
    mapStateToProps,
    { getUserInfo }
)(Dashboard);