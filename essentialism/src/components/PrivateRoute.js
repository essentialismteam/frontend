// PrivateRoute.js

import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom'
import { Context } from '../Context';

const PrivateRoute = ({
    component: Component,
    ...rest
}) => {
    const { authenticated } = useContext(Context);
    return (
        <Route
            {...rest}
            render={ props => (authenticated ?
                <Component {...props} /> :
                <Redirect to='/login' />)
            }
        />
    );
};

export default PrivateRoute;