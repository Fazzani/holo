import {
    LOGIN_USER,
    LOGOUT_USER,
    LANG_CHANGE,
    LOADING,
    ERROR,
    FETCH_NOTIFICATIONS_SUCCESS
} from "../action-types";

let store = undefined;
if (typeof localStorage !== "undefined" && localStorage !== null) {
    store = localStorage.getItem("holo_state");
}
const initialState = store
    ? JSON.parse(store).root
    : {
          user: undefined,
          lang: "English",
          pending: true,
          hasErrored: false,
          notifications: undefined
      };

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload
            };
        case LOGOUT_USER:
            return {
                ...state,
                user: undefined
            };
        case LANG_CHANGE:
            return {
                ...state,
                lang: action.payload
            };
        case LOADING:
            return {
                ...state,
                pending: action.pending
            };
        case ERROR:
            return {
                ...state,
                hasErrored: action.isError,
                message: action.exception.message
            };
        case FETCH_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                notifications: action.notifications
            };
        default:
            return state;
    }
};
export default rootReducer;
