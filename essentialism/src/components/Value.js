// Code written by Leigh-Ann Friedel

import React from "react";
import { connect } from "react-redux";

import { updateUserValues } from '../actions';

class Value extends React.Component {
  state = {
    value: "",
    userID: localStorage.getItem("userID")
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      value: this.props.value
    });
  }

  updateValue = e => {
      e.preventDefault();
      const valueObj = {
          old_value_id: this.props.valueID,
          value_id: this.props.newValueId
      };

      this.props.updateUserValues(this.state.userID, valueObj)
  }

  render() {
    return (
      <div>
        {this.props.confirmingUpdate && this.props.valueID === this.props.valueID && (
          <button onClick={e => this.updateValue(e)}>Confirm Update</button>
        )}
        <p>{this.props.value}</p>
        <button onClick={e => this.props.getAllValues(e)}>Edit Value</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  values: state.values
});

export default connect(
  mapStateToProps,
  { updateUserValues }
)(Value);
