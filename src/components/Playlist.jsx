import React, { Component } from "react";
import BreadCrumbs from "../components/shared/BreadCrumbs";
import HeaderContentPage from "../components/shared/HeaderContentPage";

class Home extends Component {
  breadcrumbs = [{ pageName: "Home", path: "/" }, { pageName: "Playlist", path: "/playlist" }];
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="page-content">
              <BreadCrumbs breadcrumbs={this.breadcrumbs} />
              <HeaderContentPage title="Home" />
      <section className="no-padding-top no-padding-bottom">
        <div>Player</div>
      </section>
      </div>
    );
  }
}

export default Home;
