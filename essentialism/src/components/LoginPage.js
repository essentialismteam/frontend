// Login.js

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Consumer, login } from '../Context';

class LoginPage extends Component {
    state = {
        username: '',
        password: ''
    }
    
    handleInput = event =>
        this.setState[{[event.target.name]: event.target.value }]
        

    handleSubmit = (e, dispatch) => {
        e.preventDefault();
        const userData = {
            username: {username},
            password: {password}
        };
        login(dispatch, userData).then(() => {
            this.props.history.push('/');
        });
    };
    
    render() {
    return (
        <Consumer>
            {({ dispatch})}
            <div>
                <form onSubmit={handleSubmit}>
                <input
                    id='username'
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={credentials.username}
                    onChange={handleInput}
                    />
                    <input
                    id='password'
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={credentials.password}
                    onChange={handleInput}
                    />
                    <button>login</button>
                </form>
            </div>
        </Consumer>
    )
    }
}
export default LoginPage;