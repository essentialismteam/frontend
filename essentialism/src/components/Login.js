// Login.js

import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import axios from 'axios';

const Login = (props) => {
    const initialState = {
        username: '',
        password: ''
    }
    const [credentials, setCredentials] = useState(initialState);

    function pleaseLogin(e) {
        let destination = '/';
        e.preventDefault()
        axios
            .post('https://essentialism-backend.herokuapp.com/auth/login', credentials)
            .then(res => { 
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('userID', res.data.id);
                localStorage.setItem('authenticated', true);
            })
            .catch(err => console.log(err));
        setCredentials(initialState);
        props.history.push(destination);
    }

    const updateFormData = event =>
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        });

    return (
        <div>
            <form onSubmit={pleaseLogin}>
            <input
                type='text'
                name='username'
                placeholder='Username'
                value={credentials.username}
                onChange={updateFormData}
                />
                <input
                type='password'
                name='password'
                placeholder='Password'
                value={credentials.password}
                onChange={updateFormData}
                />
                <button>login</button>
            </form>
        </div>
    )
}

export default withRouter(Login);