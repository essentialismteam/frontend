// PrivateRoute.js

import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom'
import { Context } from '../Context';

const PrivateRoute = ({
    component: Component,
    token,
    errorStatusCode,
    ...rest
}) => {
    const { authenticated } = useContext(Context);
    return (
        <Route
            {...rest}
            render={ props =>
                token && errorStatusCode !== 403 ? (
                <Component {...props} /> 
                ) : (
                <Redirect to='/login' />
                )
            }
        />
    );
};

const mapStateToProps = ({ token, errorStatusCode }) => ({
    errorStatusCode,
    token
});

export default withRouter(
    connect(
        mapStateToProps,
        {}
    )(PrivateRoute)
);