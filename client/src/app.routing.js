import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login/login";
import Register from "./components/Register/register";
import Home from "./components/Home/home";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        localStorage.getItem("isLoggedIn") ? (
          <>
            <Component {...routeProps}></Component>
          </>
        ) : (
          <Redirect to="/login"></Redirect>
        )
      }
    ></Route>
  );
};

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => (
        <>
          <div className="main_div">
            <Component {...routeProps}></Component>
          </div>
        </>
      )}
    ></Route>
  );
};

export const AppRouting = (props) => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <PublicRoute exact path="/" component={Home}></PublicRoute>
          <PublicRoute path="/login" component={Login}></PublicRoute>
          <PublicRoute path="/register" component={Register}></PublicRoute>
        </Switch>
      </BrowserRouter>
    </>
  );
};
