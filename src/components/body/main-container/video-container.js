import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import VideoCard from "./video-card";
import { YOUTUBE_VIDEOS_API } from "../../../utils/constants";

const VideoContainer = () => {
    const [videoList, setVideoList] = useState([]);

    useEffect(() => {
        getVideoList();
    }, []);

    const getVideoList = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();

        console.log(json);
        setVideoList(json.items);
    };

    return (
        <div className="p-2 m-2 flex flex-wrap justify-between">
            {videoList?.map((video) => (
                <Link to={"/watch?v=" + video.id}>
                    <VideoCard info={video} key={video.id} />
                </Link>
            ))}
        </div>
    );
};

export default VideoContainer;
