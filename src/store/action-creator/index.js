import { LOADING, NEW_ERROR } from "../action-types";
import { toastr } from "react-redux-toastr";

export const isLoading = pending => ({
    type: LOADING,
    pending
});

export const isError = (isError, exception) => ({
    type: NEW_ERROR,
    isError,
    exception
});

export function newMessage(message) {
    return dispatch => {
        switch (message.type) {
            case "ERROR":
                toastr.error(message.title, message.message);
                break;
            case "INFO":
                toastr.info(message.title, message.message);
                break;
            case "WARNING":
                toastr.warning(message.title, message.message);
                break;
            default:
                toastr.info(message.title, message.message);
                break;
        }
    };
}
