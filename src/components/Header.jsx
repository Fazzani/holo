import React, { Component } from 'react';

const NavItem = props => {
  return (
    <li className="nav-item">
      <a href={props.path} className="nav-link">{props.name}</a>
    </li>
  );
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { search:"" };
    }
    render() {
        return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="search-panel">
                  <div className="search-inner d-flex align-items-center justify-content-center">
                    <div className="close-btn">Close
                      <i className="fa fa-close"></i>
                    </div>
                    <form id="searchForm" action="#">
                      <div className="form-group">
                        <input type="search" name="search" placeholder="What are you searching for..." value={this.state.search} />
                        <button type="submit" className="submit">Search</button>
                      </div>
                    </form>
                  </div>
                </div>
                {/*----------------------- Brand -----------------------*/}
                <div className="container-fluid d-flex align-items-center justify-content-between">
                  <div className="navbar-header">
                    <a href="/" className="navbar-brand">
                      <div className="brand-text brand-big visible text-uppercase">
                        <strong className="text-primary">HO</strong>
                        <strong>LO</strong>
                      </div>
                      <div className="brand-text brand-sm">
                        <strong className="text-primary">H</strong>
                        <strong>L</strong>
                      </div>
                    </a>
                    <button className="sidebar-toggle">
                      <i className="fa fa-long-arrow-left"></i>
                    </button>
                  </div>
                  <div className="right-menu list-inline no-margin-bottom">
                    <div className="list-inline-item">
                      <a href="/" className="search-open nav-link">
                        <i className="icon-magnifying-glass-browser"></i>
                      </a>
                    </div>
                    <div className="list-inline-item dropdown">
                      <a id="navbarDropdownMenuLink1" href="http://example.com" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                        className="nav-link messages-toggle">
                        <i className="icon-email"></i>
                        <span className="badge dashbg-1">5</span>
                      </a>
                      <div aria-labelledby="navbarDropdownMenuLink1" className="dropdown-menu messages">
                        <a href="/" className="dropdown-item message d-flex align-items-center">
                          <div className="profile">
                            <img src="images/avatar-3.jpg" alt="..." className="img-fluid"/>
                            <div className="status online"></div>
                          </div>
                          <div className="content">
                            <strong className="d-block">Nadia Halsey</strong>
                            <span className="d-block">lorem ipsum dolor sit amit</span>
                            <small className="date d-block">9:30am</small>
                          </div>
                        </a>
                        <a href="/" className="dropdown-item message d-flex align-items-center">
                          <div className="profile">
                            <img src="images/avatar-2.jpg" alt="..." className="img-fluid"/>
                            <div className="status away"></div>
                          </div>
                          <div className="content">
                            <strong className="d-block">Peter Ramsy</strong>
                            <span className="d-block">lorem ipsum dolor sit amit</span>
                            <small className="date d-block">7:40am</small>
                          </div>
                        </a>
                        <a href="/" className="dropdown-item message d-flex align-items-center">
                          <div className="profile">
                            <img src="images/avatar-1.jpg" alt="..." className="img-fluid"/>
                            <div className="status busy"></div>
                          </div>
                          <div className="content">
                            <strong className="d-block">Sam Kaheil</strong>
                            <span className="d-block">lorem ipsum dolor sit amit</span>
                            <small className="date d-block">6:55am</small>
                          </div>
                        </a>
                        <a href="/" className="dropdown-item message d-flex align-items-center">
                          <div className="profile">
                            <img src="images/avatar-5.jpg" alt="..." className="img-fluid"/>
                            <div className="status offline"></div>
                          </div>
                          <div className="content">
                            <strong className="d-block">Sara Wood</strong>
                            <span className="d-block">lorem ipsum dolor sit amit</span>
                            <small className="date d-block">10:30pm</small>
                          </div>
                        </a>
                        <a href="/" className="dropdown-item text-center message">
                          <strong>See All Messages
                            <i className="fa fa-angle-right"></i>
                          </strong>
                        </a>
                      </div>
                    </div>
                    <div className="list-inline-item dropdown">
                      <a id="navbarDropdownMenuLink2" href="http://example.com" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                        className="nav-link tasks-toggle">
                        <i className="icon-new-file"></i>
                        <span className="badge dashbg-3">9</span>
                      </a>
                      <div aria-labelledby="navbarDropdownMenuLink2" className="dropdown-menu tasks-list">
                        <a href="/" className="dropdown-item">
                          <div className="text d-flex justify-content-between">
                            <strong>Task 1</strong>
                            <span>40% complete</span>
                          </div>
                          <div className="progress">
                            <div role="progressbar" style={{width: '40%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" className="progress-bar dashbg-1"></div>
                          </div>
                        </a>
                        <a href="/" className="dropdown-item">
                          <div className="text d-flex justify-content-between">
                            <strong>Task 2</strong>
                            <span>20% complete</span>
                          </div>
                          <div className="progress">
                            <div role="progressbar" style={{width: '20%'}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" className="progress-bar dashbg-3"></div>
                          </div>
                        </a>
                        <a href="/" className="dropdown-item">
                          <div className="text d-flex justify-content-between">
                            <strong>Task 3</strong>
                            <span>70% complete</span>
                          </div>
                          <div className="progress">
                            <div role="progressbar" style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" className="progress-bar dashbg-2"></div>
                          </div>
                        </a>
                        <a href="/" className="dropdown-item">
                          <div className="text d-flex justify-content-between">
                            <strong>Task 4</strong>
                            <span>30% complete</span>
                          </div>
                          <div className="progress">
                            <div role="progressbar" style={{width: '30%'}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" className="progress-bar dashbg-4"></div>
                          </div>
                        </a>
                        <a href="/" className="dropdown-item">
                          <div className="text d-flex justify-content-between">
                            <strong>Task 5</strong>
                            <span>65% complete</span>
                          </div>
                          <div className="progress">
                            <div role="progressbar" style={{width: '65%'}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" className="progress-bar dashbg-1"></div>
                          </div>
                        </a>
                        <a href="/" className="dropdown-item text-center">
                          <strong>See All Tasks
                            <i className="fa fa-angle-right"></i>
                          </strong>
                        </a>
                      </div>
                    </div>
                  
                    <div className="list-inline-item dropdown">
                      <a id="languages" rel="nofollow" data-target="#" href="/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                        className="nav-link language dropdown-toggle">
                        <img src="images/flags/16/GB.png" alt="English"/>
                        <span className="d-none d-sm-inline-block">English</span>
                      </a>
                      <div aria-labelledby="languages" className="dropdown-menu">
                        <a rel="nofollow" href="/" className="dropdown-item">
                          <img src="images/flags/16/FR.png" alt="English" className="mr-2"/>
                          <span>French </span>
                        </a>
                      </div>
                    </div>
                    <div className="list-inline-item logout">
                      <a id="logout" href="/login" className="nav-link">Logout
                        <i className="icon-logout"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </nav> 
            </header>
        );
    }
}

export default Header;