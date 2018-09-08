import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Lang from "./Lang";
import { fetchNotifications } from "../../store/action-creator/notifications";

const NavItem = ({ name, path }) => (
    <li className="nav-item">
        <a href={path} className="nav-link">
            {name}
        </a>
    </li>
);

const Tasks = () => {
    return (
        <div className="list-inline-item dropdown">
            <a
                id="navbarDropdownMenuLink2"
                href="http://example.com"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                className="nav-link tasks-toggle"
            >
                <i className="icon-new-file" />
                <span className="badge dashbg-3">9</span>
            </a>
            <div
                aria-labelledby="navbarDropdownMenuLink2"
                className="dropdown-menu tasks-list"
            >
                <a href="/" className="dropdown-item">
                    <div className="text d-flex justify-content-between">
                        <strong>Task 1</strong>
                        <span>40% complete</span>
                    </div>
                    <div className="progress">
                        <div
                            role="progressbar"
                            style={{ width: "40%" }}
                            aria-valuenow="40"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            className="progress-bar dashbg-1"
                        />
                    </div>
                </a>
                <a href="/" className="dropdown-item">
                    <div className="text d-flex justify-content-between">
                        <strong>Task 2</strong>
                        <span>20% complete</span>
                    </div>
                    <div className="progress">
                        <div
                            role="progressbar"
                            style={{ width: "20%" }}
                            aria-valuenow="20"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            className="progress-bar dashbg-3"
                        />
                    </div>
                </a>
                <a href="/" className="dropdown-item">
                    <div className="text d-flex justify-content-between">
                        <strong>Task 3</strong>
                        <span>70% complete</span>
                    </div>
                    <div className="progress">
                        <div
                            role="progressbar"
                            style={{ width: "70%" }}
                            aria-valuenow="70"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            className="progress-bar dashbg-2"
                        />
                    </div>
                </a>
                <a href="/" className="dropdown-item">
                    <div className="text d-flex justify-content-between">
                        <strong>Task 4</strong>
                        <span>30% complete</span>
                    </div>
                    <div className="progress">
                        <div
                            role="progressbar"
                            style={{ width: "30%" }}
                            aria-valuenow="30"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            className="progress-bar dashbg-4"
                        />
                    </div>
                </a>
                <a href="/" className="dropdown-item">
                    <div className="text d-flex justify-content-between">
                        <strong>Task 5</strong>
                        <span>65% complete</span>
                    </div>
                    <div className="progress">
                        <div
                            role="progressbar"
                            style={{ width: "65%" }}
                            aria-valuenow="65"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            className="progress-bar dashbg-1"
                        />
                    </div>
                </a>
                <a href="/" className="dropdown-item text-center">
                    <strong>
                        See All Tasks
                        <i className="fa fa-angle-right" />
                    </strong>
                </a>
            </div>
        </div>
    );
};

const NotificationItem = ({ notif }) => {
    let statusClass = `status ${notif.status}`;
    return (
        <a href="/" className="dropdown-item message d-flex align-items-center">
            <div className="profile">
                <img src={notif.image} alt="..." className="img-fluid" />
                <div className={statusClass} />
            </div>
            <div className="content">
                <strong className="d-block">{notif.username}</strong>
                <span className="d-block">{notif.message}</span>
                <small className="date d-block">{notif.date}</small>
            </div>
        </a>
    );
};

const Notifications = ({ notifs }) => {
    console.log("notifs => ", notifs);

    if (notifs === undefined || notifs === null) {
        return <React.Fragment />;
    }
    return (
        <div className="list-inline-item dropdown">
            <a
                id="navbarDropdownMenuLink1"
                href="http://example.com"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                className="nav-link messages-toggle"
            >
                <i className="icon-email" />
                <span className="badge dashbg-1">{notifs.length}</span>
            </a>
            <div
                aria-labelledby="navbarDropdownMenuLink1"
                className="dropdown-menu messages"
            >
                {notifs.map(notif => (
                    <NotificationItem notif={notif} key={notif.id} />
                ))}
                <a href="/" className="dropdown-item text-center message">
                    <strong>
                        See All Messages
                        <i className="fa fa-angle-right" />
                    </strong>
                </a>
            </div>
        </div>
    );
};

const Connection = ({ onclick }) => (
    <div className="list-inline-item logout">
        <a id="logout" href="/login" onClick={onclick} className="nav-link">
            Logout
            <i className="icon-logout" />
        </a>
    </div>
);

const Brand = ({ preffix, suffix }) => (
    <div className="navbar-header">
        <a href="/" className="navbar-brand">
            <div className="brand-text brand-big visible text-uppercase">
                <strong className="text-primary">{preffix}</strong>
                <strong>{suffix}</strong>
            </div>
            <div className="brand-text brand-sm">
                <strong className="text-primary">H</strong>
                <strong>L</strong>
            </div>
        </a>
        <button className="sidebar-toggle">
            <i className="fa fa-long-arrow-left" />
        </button>
    </div>
);
Brand.propTypes = {
    preffix: PropTypes.string.isRequired,
    suffix: PropTypes.string.isRequired
};

const Search = ({ search, onSubmit }) => (
    <div className="search-panel">
        <div className="search-inner d-flex align-items-center justify-content-center">
            <div className="close-btn">
                Close
                <i className="fa fa-close" />
            </div>
            <form id="searchForm" action="#" onSubmit={onSubmit}>
                <div className="form-group">
                    <input
                        type="search"
                        name="search"
                        placeholder="What are you searching for..."
                        defaultValue={search}
                    />
                    <button type="submit" className="submit">
                        Searchs
                    </button>
                </div>
            </form>
        </div>
    </div>
);

Search.propTypes = {
    search: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
};

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        };
    }
    onSearch = e => {};

    componentDidMount() {
        this.props.onFetchNotifications();
    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg">
                    <Search
                        search={this.state.search}
                        onSubmit={this.onSearch}
                    />
                    {/*----------------------- Brand -----------------------*/}
                    <div className="container-fluid d-flex align-items-center justify-content-between">
                        <Brand suffix="LO" preffix="HO" />
                        <div className="right-menu list-inline no-margin-bottom">
                            <div className="list-inline-item">
                                <a href="/" className="search-open nav-link">
                                    <i className="icon-magnifying-glass-browser" />
                                </a>
                            </div>
                            <Notifications notifs={this.props.notifications} />
                            <Tasks />
                            <Lang />
                            <Connection />
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

const mapStateToProps = state => {
    return {
        notifications: state.root.notifications
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onFetchNotifications: () => {
            dispatch(fetchNotifications());
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
