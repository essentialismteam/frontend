// Code written by Leigh-Ann Friedel, with scaffolding by Dan Sherman

import React, { Component } from "react";
import { connect } from "react-redux";

import { Value } from "../components";

import { getValues } from "../actions";

class Values extends Component {
    state = {
        newValueId: 0,
        confirmingUpdate: false
    }

    addValueToState = (e, valueId) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            newValueId: valueId,
            confirmingUpdate: true
        })
    }

    getAllValues = e => {
        e.preventDefault();
        this.props.getValues();
    };

    render() {
        return (
            <div>
                <h3>Values</h3>
                {this.props.values.map(value => (
                    <div key={value.id}>
                        <p>{value.value_name}</p>
                        <button onClick={e => this.addValueToState(e, value.id)}>
                            Choose This Value
            </button>
                    </div>
                ))}
                {this.props.userValues.map(e => (
                    <Value
                        key={e.id}
                        value={e.value}
                        valueID={e.id}
                        getAllValues={this.getAllValues}
                        newValueId={this.state.newValueId}
                        confirmingUpdate={this.state.confirmingUpdate}
                    />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userValues: state.userInfo.values,
    values: state.values
});

export default connect(
    mapStateToProps,
    { getValues }
)(Values);
