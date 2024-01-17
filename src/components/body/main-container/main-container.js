import React from "react";
import ButtonList from "./button-list";
import VideoContainer from "./video-container";

const MainContainer = () => {
    return (
        <div className="col-span-11">
            <ButtonList />
            <VideoContainer />
        </div>
    );
};

export default MainContainer;
