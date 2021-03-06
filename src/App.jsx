import React, { Component } from "react";
import "./App.css";
import Routes from "./routes";
import Popper from "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./css/style.css";
import "./css/font.css";
import "./css/style.red.css";
import "./css/font-awesome.min.css";
import "./js/front.js";
import store from "./store/index";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import NotificationsContainer from "../src/components/shared/NotificationsContainer";

export default class App extends Component {
    componentDidMount() {
        store.subscribe(() => {
            console.log(store.getState());
            if (typeof localStorage !== "undefined" && localStorage !== null) {
                localStorage.setItem(
                    "holo_state",
                    JSON.stringify(store.getState())
                );
            }
        });
    }
    render() {
        return (
            <Provider store={store}>
                <React.Fragment>
                    <Routes />
                    <NotificationsContainer>
                        <ReduxToastr
                            timeOut={4000}
                            newestOnTop={false}
                            preventDuplicates
                            position="top-left"
                            transitionIn="fadeIn"
                            transitionOut="fadeOut"
                            progressBar
                            closeOnToastrClick
                        />
                    </NotificationsContainer>
                </React.Fragment>
            </Provider>
        );
    }
}
