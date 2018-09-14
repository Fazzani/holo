import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { newMessage } from "../../store/action-creator/index";

class NotificationsContainer extends React.Component {
    componentDidMount() {}

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("NotificationsContainer", prevProps);
        if (prevProps.message.date !== this.props.message.date) {
            this.props.onNewMessage(this.props.message);
        }
    }
    render() {
        return <React.Fragment>{this.props.children}</React.Fragment>;
    }
}
const mapStateToProps = state => {
    return {
        message: state.root.message //state.playlist.videosjsOptions,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onNewMessage: message => {
            dispatch(newMessage(message));
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotificationsContainer);
