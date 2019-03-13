// Login.js

import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import { Consumer, login } from '../Context';

const LoginPage = (props) => {
    const initialState = {
        username: '',
        password: ''
    }
    const [credentials, setCredentials] = useState(initialState);

    // function pleaseLogin(e) {
    //     let destination = '/';
    //     e.preventDefault()
    //     axios
    //         .post('https://essentialism-backend.herokuapp.com/auth/login', credentials)
    //         .then(res => { 
    //             localStorage.setItem('token', res.data.token);
    //             localStorage.setItem('userID', res.data.id);
    //             localStorage.setItem('authenticated', true);
    //         })
    //         .catch(err => console.log(err));
    //     setCredentials(initialState);
    //     props.history.push(destination);
    // }

    handleSubmit = (e, dispatch) => {
        e.preventDefault();
        const userData = {
            username: {username},
            password: {password}
        };
        login(dispatch, userData).then(() => {
            
        })
    }

    const handleInput = event =>
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        });

    return (
        <Consumer>
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

export default withRouter(LoginPage);