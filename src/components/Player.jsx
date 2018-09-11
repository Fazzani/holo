import React, { Component } from "react";
import { connect } from "react-redux";
import BreadCrumbs from "../components/shared/BreadCrumbs";
import HeaderContentPage from "../components/shared/HeaderContentPage";
import VideoPlayer from "./shared/VideoPlayer";

class Player extends Component {
    breadcrumbs = [
        { pageName: "Home", path: "/" },
        { pageName: "player", path: "/player" }
    ];
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="page-content">
                <BreadCrumbs breadcrumbs={this.breadcrumbs} />
                <HeaderContentPage title="Home" />
                <VideoPlayer />
            </div>
        );
    }
}

export default connect()(Player);
