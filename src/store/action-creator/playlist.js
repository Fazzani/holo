import { ADD_PLAYLIST, LANG_CHANGE, LIST_PLAYLIST } from "../action-types";

export const addPlaylist = playlist => ({
    type: ADD_PLAYLIST,
    payload: playlist
});
export const changeLang = lang => ({
    type: LANG_CHANGE,
    payload: lang
});
export const fetchPlaylist = () => ({
    type: LIST_PLAYLIST,
    payload: []
});
