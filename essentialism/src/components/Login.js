// Login.js

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { login } from '../actions'

class Login extends Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
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
                <label for='username'>Username</label>
                    <input
                        type='text'
                        name='username'
                        plaseholder='Username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <label for='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        plaseholder='Password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    {this.props.error && <p>{this.props.error}</p>}

                    <button>Login</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({ error, loggingIn }) => ({
    error,
    loggingIn
});

export default connect(
    mapStateToProps,
    { login }
)(Login);