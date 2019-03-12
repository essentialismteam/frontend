import React, { createContext, useEffect, useReducer, useState } from 'react';

const RootContext = createContext();

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

    const RootContextProvider = props => {
        const [state, dispatch] = useReducer(reducer, initialState);
        let value = { state, dispatch };

        return (
            <RootContext.Provider value={defaultContext}>
                (children)
            </RootContext.Provider>
        );
    };    
};

const RootContextConsumer = RootContext.Consumer;

export { RootContext, RootContextConsumer, RootContextProvider }