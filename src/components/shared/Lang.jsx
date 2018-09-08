import React, { Component } from "react";
import { connect } from "react-redux";
import { LANG_CHANGE } from "../../store/action-types";
import { changeLang } from "../../store/action-creator/playlist";

class Lang extends Component {
    constructor(props) {
        super(props);
        console.log(`this.props.current => ${this.props.current}`);
        this.state = {
            current: this.props.current,
            languages: [
                { name: "English", img: "images/flags/16/GB.png" },
                { name: "French", img: "images/flags/16/FR.png" }
            ]
        };

        const currentLang = this.state.languages.filter(
            v => v.name === this.props.current
        );
        this.state.current =
            currentLang.length > 0 ? currentLang[0] : this.state.languages[0];
    }

    change = (e, lang) => {
        e.preventDefault();
        console.log(`Current lang chnage to ${lang}`);
        this.props.changeLang(lang.name);
    };

    render() {
        return (
            <div className="list-inline-item dropdown">
                <a
                    id="languages"
                    rel="nofollow"
                    data-target="#"
                    href="/"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="nav-link language dropdown-toggle"
                >
                    <img
                        src={this.state.current.img}
                        alt={this.state.current.name}
                    />
                    <span className="d-none d-sm-inline-block">
                        {this.state.current.name}
                    </span>
                </a>
                <div aria-labelledby="languages" className="dropdown-menu">
                    {this.state.languages.map(lang => (
                        <a
                            rel="nofollow"
                            href="/"
                            onClick={e => this.change(e, lang)}
                            className="dropdown-item"
                            key={lang.name}
                        >
                            <img
                                src={lang.img}
                                alt={lang.name}
                                className="mr-2"
                            />
                            <span>{lang.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    current: state.root.lang
});

export default connect(
    mapStateToProps,
    { changeLang }
)(Lang);
