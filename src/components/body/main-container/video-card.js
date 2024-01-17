import React from "react";

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

    return (
        <div className="w-72 mx-2 my-6">
            <img
                src={thumbnails.medium.url}
                alt="video-thumbnail"
                className="rounded-lg"
            />
            {/* 
                to display a text over 2 lines and then clip it use below css
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;  // number of lines to show
                    -webkit-box-orient: vertical;
            */}
            <div className="py-2">
                <div className="font-bold text-ellipsis line-clamp-2">
                    {title}
                </div>
                <div className="">{channelTitle}</div>
                <div className="">{statistics.viewCount} views</div>
            </div>
        </div>
    );
};

export default VideoCard;
