import React, { createContext, useReducer } from 'react';

const UserContext = createContext();

const initialState = {
    userID: '',
    token: localStorage.getItem('token')
};

const reducer = (state,action) => {
    switch (action.type) {
        default:
            return state
    };
};

const UserProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };