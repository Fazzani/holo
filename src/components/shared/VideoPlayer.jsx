import React from "react";
import videojs from "video.js";
import videojsPlaylistPlugin from "videojs-playlist";
import "video.js/dist/video-js.min.css";
import "videojs-playlist-ui/dist/videojs-playlist-ui.vertical.css";
import "../../css/player.css";
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
        let { playlist } = this.props;
        this.player = videojs(
            this.videoNode,
            this.props,
            function onPlayerReady() {
                console.log("onPlayerReady", this, playlist);

                this.playlist(playlist);
                // Initialize the playlist-ui plugin with no option (i.e. the defaults).
                this.playlistUi({
                    playOnSelect: true
                });
                // Play through the playlist automatically.
                this.playlist.autoadvance(0);
            }
        );
    }

    // destroy player on unmount
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }

    render() {
        return (
            <div class="main-preview-player">
                <div data-vjs-player>
                    <video
                        ref={node => (this.videoNode = node)}
                        className="video-js vjs-fluid vjs-big-play-centered vjs-default-skin"
                    >
                        <p className="vjs-no-js">
                            To view this video please enable JavaScript, and
                            consider upgrading to a web browser that
                            <a
                                href="http://videojs.com/html5-video-support/"
                                target="_blank"
                            >
                                supports HTML5 video
                            </a>
                        </p>
                    </video>

                    <div className="playlist-container preview-player-dimensions vjs-fluid">
                        <div className="vjs-playlist" />
                    </div>
                </div>
            </div>
        );
    }
}
