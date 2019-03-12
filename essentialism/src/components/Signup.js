// Signup.js

import React, { useState } from 'react';
import axios from 'axios';

export default () => {
    const [credentials, setCredentials] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: ''
    });

    function pleaseSignup(e) {
        e.preventDefault();
        axios
            .post('https://essentialism-backend.herokuapp.com/auth/register', credentials)
            .then(res => {
                localStorage.setItem('authBody', res.data);
                localStorage.setItem('authenticated', true)
            })
    }

    const updateFormData = event =>
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        });

    return (
        <div>
            <form onSubmit={pleaseSignup}>
            <input
                type='text'
                name='firstName'
                placeholder='First Name'
                value={credentials.firstName}
                onChange={(e) => updateFormData(e)}
            />
            <input
                type='text'
                name='lastName'
                placeholder='Last Name'
                value={credentials.lastName}
                onChange={(e) => updateFormData(e)}
            />
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