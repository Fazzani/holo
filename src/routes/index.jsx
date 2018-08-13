import React, { Component } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "../components/Home";
import Playlist from "../components/Playlist";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import SideBar from "../components/shared/SideBar";

export default class App extends Component {
  constructor(props) {
    super(props);
    //console.dir(props.history);
    this.state = {
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    // fetch(`${process.env.REACT_APP_API}api/stream`)
    //   .then(response => response.json())
    //   .then(data => this.setState({ hits: data, isLoading: false }))
    //   .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <div className="d-flex align-items-stretch">
            <SideBar />
              <Switch>
                <Route path="/home" render={props => <Home {...props} />} exact />
                <Route path="/playlist" component={Playlist} exact />
                <Route path="/" render={props => <Home {...props} />} />
              </Switch>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
