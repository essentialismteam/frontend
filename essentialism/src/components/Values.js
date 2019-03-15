import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Value } from '../components';

class Values extends Component {

    render() {
        return (
            <div>
                <h3>Values</h3>
                <Value />
            </div>
        )
    }
}

export default connect(
    null,
    {}
)(Values);