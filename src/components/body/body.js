import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./sidebar";
import MainContainer from "./main-container/main-container";

const Body = () => {
    return (
        <div className="grid grid-flow-col">
            <Sidebar />
            {/* <MainContainer />
            <WatchPage /> */}
            <Outlet />
        </div>
    );
};

export default Body;
