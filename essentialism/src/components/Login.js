// Login.js

import React, { useState } from 'react';
import axios from 'axios';

export default () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function pleaseLogin(login) {
        axios
            .post('http://some.url', {username: username, password: password})
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
                onChange={(() => setUsername(this.value))}
                />
                <input
                type='text'
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