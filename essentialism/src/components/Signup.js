// Login.js

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { signup } from '../actions'

class Signup extends Component {
    state = {
        credentials: {
            firstname: '',
            lastname: '',
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
            .signup(this.state.credentials)
            this.props.history.push('/');
    }

    render() {
        console.log(this.props);
        return (            
            <div>
                <form onSubmit={this.login}>
                <label htmlFor='firstname'>First Name</label>
                    <input
                        type='text'
                        name='firstname'
                        plaseholder='First name required'
                        value={this.state.credentials.firstname}
                        onChange={this.handleChange}
                        required
                    />
                    <label htmlFor='lastname'>Last Name</label>
                    <input
                        type='text'
                        name='lastname'
                        plaseholder='Last name optional'
                        value={this.state.credentials.lastname}
                        onChange={this.handleChange}
                    />
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
                    {this.props.error && <p>{this.props.error}</p>}

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

export default connect(
    mapStateToProps,
    { signup }
)(Signup);