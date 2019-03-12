import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom'
import { RootContext } from '../RootContext';

const PrivateRoute = ({
    render,
    component: Component,
    ...rest
}) => {
    const { authenticated } = useContext(RootContext);
    return (
        <Route            
            render={ props => (authenticated ? 
                <Component {...props} /> :
                <Redirect to='/login' />)
            }
        />
    );
};

export default PrivateRoute;