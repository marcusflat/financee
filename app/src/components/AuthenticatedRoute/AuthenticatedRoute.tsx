import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUserIsLoggedIn } from '../../redux/user/hooks/useUserIsLoggedIn';


const AuthenticatedRoute = ({component: Component, ...rest}: {component: any, path: string}) => {
    const isLoggedIn = useUserIsLoggedIn();
    
    return (
        <Route {...rest} render={props => (
            isLoggedIn ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default AuthenticatedRoute;