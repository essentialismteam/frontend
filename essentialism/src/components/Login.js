// Login.js

import React, { useState } from 'react';
import axios from 'axios';

export default () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    function pleaseLogin(e) {
        e.preventDefault()
        axios
            .post('https://essentialism-backend.herokuapp.com/auth/login', credentials)
            .then(res => { 
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('authenticated', true);
            })
            .catch(err => console.log(err));
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
                onChange={(e) => updateFormData(e)}
                />
                <input
                type='password'
                name='password'
                placeholder='Password'
                value={credentials.password}
                onChange={(e) => updateFormData(e)}
                />
                <button>login</button>
            </form>
        </div>
    )
}