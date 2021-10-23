import React from "react";
import {useLocation, Route, Switch} from "react-router-dom"
import Break from "../pages/Break.js";
import Calendar from "../pages/Calendar.js"
import FindFriend from "../pages/Break.js";
import Goals from "../pages/Break.js";
import Learn from "../pages/Break.js";
import Login from "../pages/Break.js";
import StickerBoard from "../pages/Break.js";

function Router() {
  const routes = [
    {path: "/", Component: Login},
    {path: "/break", Component: Break},
    {path: "/calendar", Component: Calendar},
    {path: "/findfriend", Component: FindFriend},
    {path: "/goals", Component: Goals},
    {path: "/learn", Component: Learn},
    {path: "/stickerboard", Component: StickerBoard},
  ];

  let location = useLocation();
  return (
    <Switch location={location} key={location.pathname}>
      {/* returns a collection of routes within a switch*/}
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path} component={Component} />
      ))}
    </Switch>
  );
}

export default Router;