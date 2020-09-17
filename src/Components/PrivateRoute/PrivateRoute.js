import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserLoggedIn } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedIn, setLoggedIn] = useContext(UserLoggedIn);

  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          loggedIn.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;
