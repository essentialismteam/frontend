// Login.js

import React, { useState } from 'react';
import axios from 'axios';

export default () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function pleaseLogin(login) {
        axios
            .post('https://essentialism-backend.herokuapp.com/auth/login', {username: username, password: password})
            .then(res => {
                localStorage.setItem('authBody', res.data);
                localStorage.setItem('authenticated', true)
            })
    }

    return (
        <div>
            <form onSubmit={pleaseLogin}>
            <input
                type='text'
                name='username'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <input
                type='password'
                name='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button>login</button>
            </form>
        </div>
    )
}