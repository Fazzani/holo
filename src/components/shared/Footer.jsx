import React, { Component } from "react";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <footer className="footer">
                <div className="footer__block block no-margin-bottom">
                    <div className="container-fluid text-center">
                        <p className="no-margin-bottom">2018 &copy; Synker.</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
