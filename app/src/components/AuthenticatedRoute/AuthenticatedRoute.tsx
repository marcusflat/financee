import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../../utils';


const AuthenticatedRoute = ({component: Component, ...rest}: {component: any, path: string}) => {
    return (
        <Route {...rest} render={props => (
            isLoggedIn() ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default AuthenticatedRoute;