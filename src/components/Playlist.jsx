import React, { Component } from "react";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import SideBar from "./shared/SideBar";
import ConsoleOutput from "./Console";
import BreadCrumbs from "./shared/BreadCrumbs";
import HeaderContentPage from "./shared/HeaderContentPage";

class Home extends Component {
  breadcrumbs = [{ pageName: "Home", path: "/" },{ pageName: "Playlist", path: "/playlist" }];
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <div className="d-flex align-items-stretch">
          <SideBar />
          <div className="page-content">
            <HeaderContentPage title="Playlist" />
            <BreadCrumbs breadcrumbs={this.breadcrumbs} />
            <section className="no-padding-top no-padding-bottom">
              <div>Player</div>
            </section>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
