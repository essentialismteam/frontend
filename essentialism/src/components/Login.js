// Login.js

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { login } from '../actions'

class Login extends Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        e.preventDefault();
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        this.props
            .login(this.state.credentials)
            .then(() => this.props.history.push('/'));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        name='username'
                        plaseholder='Username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        plaseholder='Password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />

                    <button type='submit'>Login</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({ error, loggingIn }) => ({
    error,
    loggingIn
});

export default withRouter(connect(
    mapStateToProps,
    { login }
)(Login));