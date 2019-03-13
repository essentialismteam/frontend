import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getValues } from '../actions';

class ChooseValues extends Component {    
    
    componentDidMount() {
        this.props.getValues();
        
    }

    render() {
        return (
            <div>
                <h2>Choose Your Values</h2>
            </div>
        )
    }
}

const mapStateToProps = ({
    values,
    fetchingValues
}) => ({
    values,
    fetchingValues
});

export default withRouter(
    connect(
        mapStateToProps,
        { getValues }
    )(ChooseValues)
);