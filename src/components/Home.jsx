import React from "react";
import { connect } from "react-redux";
import ConsoleOutput from "./Console";
import BreadCrumbs from "../components/shared/BreadCrumbs";
import HeaderContentPage from "../components/shared/HeaderContentPage";
import { fetchExamples } from "../store/action-creator/examples";
import VideoPlayer from "./shared/VideoPlayer";

const videoJsOptions = {
    fluid: "true",
    techorder: ["chromecast", "html5"], // You may have more Tech, such as Flash or HLS
    preload: "auto",
    chromecast: {
        requestTitleFn: function(source) {
            // Not required
            return "test title";
        },
        requestSubtitleFn: function(source) {
            // Not required
            return "subtitle test";
        }
    },
    // plugins: {
    //   chromecast: {
    //     appId: "3550951F",
    //     addButtonToControlBar: true // Defaults to true
    //   }
    // },
    autoPlay: true,
    controls: true,
    crossorigin: "anonymous",
    sources: [
        {
            src: "http://vjs.zencdn.net/v/oceans.mp4",
            type: "video/mp4"
        }
    ],
    playlist: [
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
    ]
};

class Home extends React.Component {
    breadcrumbs = [{ pageName: "Home", path: "/" }];
    constructor(props) {
        super(props);
        this.props.onFetchExamples();
        console.log(process.env.REACT_APP_API);
        console.dir(props.history);
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.pending) {
            return <p>Loading…</p>;
        }

        return (
            <div className="page-content">
                <BreadCrumbs breadcrumbs={this.breadcrumbs} />
                <HeaderContentPage title="Home" />
                <section className="no-padding-top no-padding-bottom">
                    <div className="row block">
                        <div className="form-group col-md-12">
                            <select
                                className="custom-select"
                                id="examples_select"
                            >
                                <option defaultValue="-1">
                                    Select Video example...
                                </option>
                                {this.props.examples &&
                                    this.props.examples.map(example => (
                                        <option
                                            key={example.link}
                                            value={example.link}
                                        >
                                            {example.title}
                                        </option>
                                    ))}
                            </select>
                        </div>
                    </div>

                    <div className="row block">
                        <div className="col-md-12">
                            <form
                                className="form-horizontal form-validate"
                                method="post"
                                action="/api/v1/ffmpeg/live"
                                id="sendCommandStreamForm"
                            >
                                <div className="form-group col-lg-12">
                                    <input
                                        type="text"
                                        className="input-material"
                                        id="url"
                                        name="stream[url]"
                                        defaultValue=""
                                        data-msg="Please enter the stream url"
                                        required
                                    />
                                    <label
                                        htmlFor="name"
                                        className="label-material"
                                    >
                                        Stream Url
                                    </label>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="input-material"
                                                id="audio_codec"
                                                name="stream[audio_codec]"
                                                defaultValue="copy"
                                                required
                                            />
                                            <label
                                                htmlFor="name"
                                                className="label-material"
                                            >
                                                Audio codec
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="input-material"
                                                id="video_size"
                                                name="stream[video_size]"
                                                defaultValue="640x?"
                                                required
                                            />
                                            <label
                                                htmlFor="name"
                                                className="label-material"
                                            >
                                                Video size
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="input-material"
                                                id="format"
                                                name="stream[format]"
                                                defaultValue="flv"
                                                required
                                            />
                                            <label
                                                htmlFor="name"
                                                className="label-material"
                                            >
                                                Format
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="input-material"
                                                id="audio_bitrate"
                                                name="stream[audio_bitrate]"
                                                defaultValue="128k"
                                                required
                                            />
                                            <label
                                                htmlFor="name"
                                                className="label-material"
                                            >
                                                Audio bitrate
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="input-material"
                                                id="video_bitrate"
                                                name="stream[video_bitrate]"
                                                defaultValue="400k"
                                                required
                                            />
                                            <label
                                                htmlFor="name"
                                                className="label-material"
                                            >
                                                Video bitrate
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group ">
                                            <input
                                                type="text"
                                                className="input-material"
                                                id="audio_resolution"
                                                name="stream[audio_resolution]"
                                                defaultValue="22050"
                                                required
                                            />
                                            <label
                                                htmlFor="name"
                                                className="label-material"
                                            >
                                                Audio resolution
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-12 text-right">
                                        <input
                                            id="submit"
                                            name="submit"
                                            type="submit"
                                            defaultValue="Stream"
                                            className="btn btn-outline-primary btn-sm"
                                        />
                                        <input
                                            id="info-stream-btn"
                                            name="submit"
                                            type="button"
                                            defaultValue="Video Info"
                                            className="btn btn-outline-info btn-sm"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-12" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <VideoPlayer {...videoJsOptions} />
                    <ConsoleOutput />
                </section>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchExamples: () => {
            dispatch(fetchExamples());
        }
    };
};

const mapStateToProps = state => {
    return {
        examples: state.playlist.examples,
        hasErrored: state.hasErrored,
        pending: state.pending
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
