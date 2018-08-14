import React, { Component } from "react";
import ConsoleOutput from "./Console";
import BreadCrumbs from "../components/shared/BreadCrumbs";
import HeaderContentPage from "../components/shared/HeaderContentPage";

class Home extends Component {
    breadcrumbs = [{ pageName: "Home", path: "/" }];
    constructor(props) {
        super(props);
        console.log(process.env.REACT_APP_API);
        console.dir(props.history);
        this.state = {
            isLoading: false,
            error: null
        };
    }

    render() {
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
                            </select>
                        </div>
                    </div>
                    <div className="row block">
                        <div className="col-md-6">
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
                    <ConsoleOutput />
                </section>
            </div>
        );
    }
}

export default Home;
