import React, { Component } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "../components/Home";
import Playlist from "../components/Playlist";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import SideBar from "../components/shared/SideBar";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Header />
                    <div className="d-flex align-items-stretch">
                        <SideBar />
                        <Switch>
                            <Route
                                path="/home"
                                render={props => <Home {...props} />}
                                exact
                            />
                            <Route
                                path="/playlist"
                                component={Playlist}
                                exact
                            />
                            <Route
                                path="/"
                                render={props => <Home {...props} />}
                            />
                        </Switch>
                        <Footer />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
