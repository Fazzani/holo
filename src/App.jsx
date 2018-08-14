import React, { Component } from "react";
import "./App.css";
import Routes from "./routes";
import Popper from "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./css/style.css";
import "./css/font.css";
import "./css/style.red.css";
import "./css/font-awesome.min.css";
import "./js/front.js";

export default class App extends Component {
    render() {
        return <Routes />;
    }
}
