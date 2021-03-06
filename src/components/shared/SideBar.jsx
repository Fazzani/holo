import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: { displayName: "Fazzani Heni", role: "Administrator" }
        };
    }
    render() {
        return (
            <nav id="sidebar">
                <div className="sidebar-header d-flex align-items-center">
                    <div className="avatar">
                        <img
                            src="images/avatar-6.jpg"
                            alt="..."
                            className="img-fluid rounded-circle"
                        />
                    </div>
                    <div className="title">
                        <h1 className="h5">{this.state.user.displayName}</h1>
                        <p>{this.state.user.role}</p>
                    </div>
                </div>
                <span className="heading">Main</span>
                <ul className="list-unstyled" id="mainMenu">
                    <li>
                        <NavLink to="/home" activeClassName="active">
                            <i className="fa fa-list-ul" />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/playlist" activeClassName="active">
                            <i className="fa fa-list-ul" />
                            Playlist
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active">
                            <i className="fa fa-list-ul" />
                            About
                        </NavLink>
                    </li>
                    <li>
                        <a
                            href="#exampledropdownDropdown"
                            aria-expanded="true"
                            data-toggle="collapse"
                        >
                            <i className="fa fa-wrench" />
                            Tools
                        </a>
                        <ul
                            id="exampledropdownDropdown"
                            className="list-unstyled collapse"
                        >
                            <li className="active">
                                <a href="/commandline">
                                    <i className="fa fa-terminal" />
                                    Command Line
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="/login">
                            <i className="icon-logout" />
                            Login page
                        </a>
                    </li>
                </ul>
                <span className="heading">Extras</span>
                <ul className="list-unstyled">
                    <li>
                        <a href="/stats">
                            <i className="fa fa-bar-chart" />
                            Statistic
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default SideBar;
