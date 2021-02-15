import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../../utils';


const UnauthenticatedRoute = ({component: Component, ...rest}: { component: any, path: string }) => {
    return (
        <Route {...rest} render={props => (
          isLoggedIn() ?
                <Redirect to="/overview" />
            : <Component {...props} />
        )} />
    );
};

export default UnauthenticatedRoute;