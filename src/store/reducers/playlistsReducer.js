import {
    ADD_PLAYLIST,
    LIST_PLAYLIST,
    FETCH_VIDEO_EXAMPLES_SUCCESS
} from "../action-types";
const initialState = {
    pending: false,
    fetched: false,
    hasErrored: null,
    playlists: []
};
const playlistReducer = (state = initialState, action) => {
    console.log("in PL reducer: ", action);
    switch (action.type) {
        case "FETCH_PLAYLIST_PENDING":
            return {
                ...state,
                pending: true
            };
        case "FETCH_PLAYLIST_FULFILLED":
            console.log(`playlist fetched => ${action.payload}`);
            return {
                ...state,
                fetched: true,
                pending: false,
                playlist: action.payload
            };
        case ADD_PLAYLIST:
            return {
                ...state,
                ...state.playlists,
                playlist: action.payload
            };
        case LIST_PLAYLIST:
            return {
                ...state,
                playlist: action.payload
            };
        case FETCH_VIDEO_EXAMPLES_SUCCESS:
            return {
                ...state,
                examples: action.examples
            };

        default:
            return state;
    }
};
export default playlistReducer;
