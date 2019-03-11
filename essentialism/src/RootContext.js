// RootContext.js

import React, { useEffect, useState } from 'react';

export const RootContext = React.createContext();

export default ({ children }) => {
    const prevAuth = window.localStorage.getItem('auth') || false;
    const prevAuthBody = window.localStorage.getItem('authBody') || null;
    const [authenticated, setAuthenticated] = useState(prevAuth);
    const [authBody, setAuthbody] = useState(prevAuthBody);

    useEffect(
        () => {
            window.localStorage.setItem('authenticatedd', authenticated);
            window.localStorage.setItem('authBody', authBody);
        },
        [authenticated, authBody]
    );

    const defaultContext = {
        authenticated,
        setAuthenticated,
        authBody,
        setAuthbody
    };

    return (
        <RootContext.Provider value={defaultContext}>
            (children)
        </RootContext.Provider>
    );
};