// Login.js

import React, { useState } from 'react';
import axios from 'axios';

function pleaseLogin(login) {
    axios
        .post('http://some.url', )
}

export default () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <form onSubmit={pleaseLogin}>
            <input
                type='text'
                name='username'
                placeholder='Username'
                value={username}
                onChange={(() => setUsername(event.target.value))}
                />
                <input
                type='text'
                name='password'
                placeholder='Password'
                value={password}
                onChange={(() => setPassword(event.target.value))}
                />
                <button></button>
            </form>
        </div>
    )
}