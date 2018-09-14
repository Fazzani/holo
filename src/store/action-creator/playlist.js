import {
    ADD_PLAYLIST,
    LANG_CHANGE,
    FETCH_PLAYLIST_FULFILLED
} from "../action-types";
import { isLoading } from "../action-creator";
import { actions as toastrActions } from "react-redux-toastr";

export const addPlaylist = playlist => ({
    type: ADD_PLAYLIST,
    payload: playlist
});
export const changeLang = lang => ({
    type: LANG_CHANGE,
    payload: lang
});
export const fetchPlaylist = playlist => ({
    type: FETCH_PLAYLIST_FULFILLED,
    payload: playlist
});

const playlist = [
    {
        name: "Disney's Oceans 1",
        description:
            "Explore the depths of our planet's oceans. " +
            "Experience the stories that connect their world to ours. " +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
            "sed do eiusmod tempor incididunt ut labore et dolore magna " +
            "aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
            "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure " +
            "dolor in reprehenderit in voluptate velit esse cillum dolore eu " +
            "fugiat nulla pariatur. Excepteur sint occaecat cupidatat non " +
            "proident, sunt in culpa qui officia deserunt mollit anim id est " +
            "laborum.",
        duration: 45,
        sources: [
            {
                src: "http://vjs.zencdn.net/v/oceans.mp4",
                type: "video/mp4"
            },
            {
                src: "http://vjs.zencdn.net/v/oceans.webm",
                type: "video/webm"
            }
        ],
        // you can use <picture> syntax to display responsive images
        thumbnail: [
            {
                srcset: "images/play-video.png",
                type: "image/png",
                media: "(min-width: 400px;)"
            },
            {
                src: "images/play-video.png"
            }
        ]
    },
    {
        name: "Disney's Oceans 2",
        description:
            "Explore the depths of our planet's oceans. " +
            "Experience the stories that connect their world to ours. " +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
            "sed do eiusmod tempor incididunt ut labore et dolore magna " +
            "aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
            "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure " +
            "dolor in reprehenderit in voluptate velit esse cillum dolore eu " +
            "fugiat nulla pariatur. Excepteur sint occaecat cupidatat non " +
            "proident, sunt in culpa qui officia deserunt mollit anim id est " +
            "laborum.",
        duration: 45,
        sources: [
            {
                src: "http://vjs.zencdn.net/v/oceans.mp4?2",
                type: "video/mp4"
            },
            {
                src: "http://vjs.zencdn.net/v/oceans.webm?2",
                type: "video/webm"
            }
        ],
        // you can use <picture> syntax to display responsive images
        thumbnail: [
            {
                srcset: "images/play-video.png",
                type: "image/png",
                media: "(min-width: 400px;)"
            },
            {
                src: "images/play-video.png"
            }
        ]
    },
    {
        name: "Disney's Oceans 3",
        description:
            "Explore the depths of our planet's oceans. " +
            "Experience the stories that connect their world to ours. " +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
            "sed do eiusmod tempor incididunt ut labore et dolore magna " +
            "aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
            "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure " +
            "dolor in reprehenderit in voluptate velit esse cillum dolore eu " +
            "fugiat nulla pariatur. Excepteur sint occaecat cupidatat non " +
            "proident, sunt in culpa qui officia deserunt mollit anim id est " +
            "laborum.",
        duration: 45,
        sources: [
            {
                src: "http://vjs.zencdn.net/v/oceans.mp4?3",
                type: "video/mp4"
            },
            {
                src: "http://vjs.zencdn.net/v/oceans.webm?3",
                type: "video/webm"
            }
        ],
        // you can use <picture> syntax to display responsive images
        thumbnail: [
            {
                srcset: "images/play-video.png",
                type: "image/png",
                media: "(min-width: 400px;)"
            },
            {
                src: "images/play-video.png"
            }
        ]
    },
    {
        name: "Sintel (No Thumbnail)",
        description:
            "The film follows a girl named Sintel who is searching for a baby dragon she calls Scales.",
        sources: [
            {
                src: "http://media.w3.org/2010/05/sintel/trailer.mp4",
                type: "video/mp4"
            },
            {
                src: "http://media.w3.org/2010/05/sintel/trailer.webm",
                type: "video/webm"
            },
            {
                src: "http://media.w3.org/2010/05/sintel/trailer.ogv",
                type: "video/ogg"
            }
        ],
        thumbnail: false
    },
    // This is a really underspecified video to demonstrate the
    // behavior when optional parameters are missing. You'll get better
    // results with more video metadata!
    {
        name: "Invalid Source",
        sources: [
            {
                src: "Invalid"
            }
        ]
    }
];

export function fetchPlaylistThunk() {
    return dispatch => {
        dispatch(isLoading(true));
        dispatch(
            toastrActions.add({
                id: "mycustomid", // If not provided we will add one.
                type: "success",
                title: "your title",
                position: "top-left", // This will override the global props position.
                attention: true, // This will add a shadow like the confirm method.
                onAttentionClick: id => {}, //override default behavior of 'attention' background click.
                message: "loading playlist",
                options: {}
            })
        );
        dispatch(fetchPlaylist(playlist));
        dispatch(isLoading(false));
    };
}
