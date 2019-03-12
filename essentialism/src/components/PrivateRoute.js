import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom'
import { RootContext } from '../RootContext';

export default ({
    render,
    component: Component,
    ...routeProps
}) => {
    console.log(routeProps);
    const { authenticated } = useContext(RootContext);
    return (
        <Route
            {...routeProps}
            render={ () => (authenticated ?
                <Component {...routeProps} /> :
                <Redirect to='/login' />)
            }
        />
    );
};