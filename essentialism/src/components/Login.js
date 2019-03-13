// Login.js

import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default () => {
    const initialState = {
        username: '',
        password: ''
    }
    const [credentials, setCredentials] = useState(initialState);

    function pleaseLogin(e) {
        e.preventDefault()
        axios
            .post('https://essentialism-backend.herokuapp.com/auth/login', credentials)
            .then(res => { 
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('authenticated', true);
            })
            .catch(err => console.log(err));
        setCredentials(initialState);
        
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