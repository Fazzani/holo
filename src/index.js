import React, { Component } from "react"
import "./App.css"
import ReactDOM from "react-dom"
import registerServiceWorker from "./registerServiceWorker"
import Routes from './routes'
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './css/style.css'
import './css/font.css'
import './css/style.red.css'
import './css/font-awesome.min.css'
import './js/front.js'

class App extends Component {
  render() {
    return (
      <Routes/>
    );
  }
}


ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
