import React from "react";
import videojs from "video.js";
import videojsPlaylistPlugin from "videojs-playlist";
import "video.js/dist/video-js.min.css";
import "videojs-playlist-ui/dist/videojs-playlist-ui.vertical.css";
import "@silvermine/videojs-chromecast/dist/silvermine-videojs-chromecast.css";

// import streaming from "@videojs/http-streaming";
import level from "videojs-contrib-quality-levels";
import flash from "videojs-flash";
// import overlay from "videojs-overlay";
import playlistui from "videojs-playlist-ui";
import chromecast from "@silvermine/videojs-chromecast";

export default class VideoPlayer extends React.Component {
    componentDidMount() {
        // instantiate Video.js
        videojs.registerPlugin("flash", flash);
        videojs.registerPlugin("level", level);
        // videojs.registerPlugin("streaming", streaming);
        videojs.registerPlugin("videojsPlaylistPlugin", videojsPlaylistPlugin);
        videojs.registerPlugin("playlist-ui", playlistui);
        videojs.registerPlugin("chromecast", chromecast);
        //videojs.registerPlugin("overlay", overlay);
        this.player = videojs(
            this.videoNode,
            this.props,
            function onPlayerReady() {
                console.log("onPlayerReady", this);
                //   this.chromecast({
                //     appId: "3550951F"
                //   });
            }
        );
    }

    // destroy player on unmount
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }

    // wrap the player in a div with a `data-vjs-player` attribute
    // so videojs won't create additional wrapper in the DOM
    // see https://github.com/videojs/video.js/pull/3856
    render() {
        return (
            <div data-vjs-player>
                <video
                    ref={node => (this.videoNode = node)}
                    className="video-js"
                />
            </div>
        );
    }
}
