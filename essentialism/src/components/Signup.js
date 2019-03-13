// Signup.js

import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const Signup = (props) => {
    
    const initialState = {
        firstname: '',
        lastname: '',
        username: '',
        password: ''
    }
    
    const [credentials, setCredentials] = useState(initialState);

    function pleaseSignup(e) {
        let destination = '/';
        e.preventDefault();
        axios
            .post('https://essentialism-backend.herokuapp.com/auth/register', credentials)
            .then(res => {
                localStorage.setItem('authBody', res.data.token);
                localStorage.setItem('authenticated', true)
            });
        setCredentials(initialState);
        props.history.push(destination);
        };

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
                name='firstname'
                placeholder='First Name'
                value={credentials.firstname}
                onChange={updateFormData}
            />
            <input
                type='text'
                name='lastname'
                placeholder='Last Name'
                value={credentials.lastname}
                onChange={updateFormData}
            />
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

export default withRouter(Signup);