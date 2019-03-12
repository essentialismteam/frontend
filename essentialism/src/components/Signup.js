// Signup.js

import React, { useState } from 'react';
import axios from 'axios';

export default () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function pleaseSignup(login) {
        axios
            .post('http://some.url', {username: username, password: password})
            .then(res => {
                localStorage.setItem('authBody', res.data);
                localStorage.setItem('authenticated', true)
            })
    }

    return (
        <div>
            <form onSubmit={pleaseSignup}>
            <input
                type='text'
                name='firstName'
                placeholder='First Name'
                value={firstName}
                onChange={(() => setFirstName(this.value))}
            />
            <input
                type='text'
                name='lastName'
                placeholder='Last Name'
                value={lastName}
                onChange={(() => setLastName(this.value))}
            />
            <input
                type='text'
                name='username'
                placeholder='Username'
                value={username}
                onChange={(() => setUsername(this.value))}
            />
            <input
                type='password'
                name='password'
                placeholder='Password'
                value={password}
                onChange={(() => setPassword(this.value))}
            />
                <button>login</button>
            </form>
        </div>
    )
}