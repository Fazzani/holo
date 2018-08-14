import React, { Component } from "react";

class ConsoleOutput extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="navbar fixed-bottom navbar-dark bg-dark shell">
                <div className="shell-wrap">
                    <p className="shell-top-bar">Output</p>
                    <ul className="shell-body" id="messages" />
                </div>
            </div>
        );
    }
}

export default ConsoleOutput;
