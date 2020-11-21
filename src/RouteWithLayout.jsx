import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Context from "./Contexts/GlobalContext";

const RouteWithLayout = (props) => {
  const { layout: Layout, component: Component, auth, ...rest } = props;
  const { user } = useContext(Context);
  return (
    <Route
      {...rest}
      render={(matchProps) =>
        auth === true && user == null ? (
          <Redirect
            to={{ pathname: "/sign-in", state: { from: props.location } }}
          />
        ) : (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        )
      }
    />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
};

export default RouteWithLayout;
