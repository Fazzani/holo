import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "../components/Home";
import Playlist from "../components/Playlist";
export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" render={props => <Home {...props} />} exact />
      <Route path="/playlist" component={Playlist} />
    </Switch>
  </BrowserRouter>
);
