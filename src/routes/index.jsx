import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "../components/Home";
import Playlist from "../components/Playlist";
export default () => (
  <BrowserRouter>
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"playlist"} component={Playlist} />
    </Switch>
  </BrowserRouter>
);
