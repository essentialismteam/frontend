import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Projects, Values } from '../components'

class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getUserInfo(this.props.id);
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

const mapStateToProps = ({ id, getUserInfo }) => ({
    id,
    getUserInfo
})

export default connect(
    mapStateToProps,
    {}
)(Dashboard);