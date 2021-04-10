import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';
const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser,setloggedInUser]=useContext(UserContext);
        return (
          <Route
            {...rest}
            render={({ location }) =>
              loggedInUser.email ? (
                children
              ) : (
                <Redirect
                  to={{
                    pathname: "/auth/login",
                    state: { from: location }
                  }}
                />
              )
            }
          />
        );
};

export default PrivateRoute;