import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Sidebar = () => {
    const isMenuExpanded = useSelector((store) => store.app.isMenuExpanded);
    const isMenuClosed = useSelector((store) => store.app.isMenuClosed);

    if (isMenuClosed) {
        return;
    }

    if (!isMenuExpanded) {
        return (
            <div className="col-span-1 m-2 p-2">
                <ul>
                    <li className="py-2">
                        <Link to="/">
                            <i className="fa-solid fa-home text-center block"></i>
                            <span className="text-center block">Home</span>
                        </Link>
                    </li>
                    <li className="py-2">
                        <i className="fa-solid fa-bolt text-center block"></i>
                        <span className="text-center block">Shorts</span>
                    </li>
                    <li className="py-2">
                        <i className="fa-solid fa-tv text-center block"></i>
                        <span className="text-center block">Subscriptions</span>
                    </li>
                    <li className="py-2">
                        <i className="fa-brands fa-youtube text-center block"></i>
                        <span className="text-center block">You</span>
                    </li>
                </ul>
            </div>
        );
    }

    return (
        <div className="col-span-1 m-2 p-2">
            <ul>
                <li className="py-2">
                    <Link to="/">
                        <i className="fa-solid fa-home mr-4"></i>
                        <span>Home</span>
                    </Link>
                </li>
                <li className="py-2">
                    <i className="fa-solid fa-bolt mr-4"></i>
                    <span>Shorts</span>
                </li>
                <li className="py-2">
                    <i className="fa-solid fa-tv mr-4"></i>
                    <span>Subscriptions</span>
                </li>
            </ul>

            <hr className="my-4" />

            <ul>
                <li className="py-2">
                    <i className="fa-regular fa-id-card mr-4"></i>
                    <span>You</span>
                </li>
                <li className="py-2">
                    <i className="fa-solid fa-clock-rotate-left mr-4"></i>
                    <span>History</span>
                </li>
            </ul>

            <hr className="my-4" />

            <h1 className="font-bold">Explore</h1>
            <ul>
                <li className="py-2">
                    <i className="fa-solid fa-arrow-trend-up mr-4"></i>
                    <span>Trending</span>
                </li>
                <li className="py-2">
                    <i className="fa-solid fa-music mr-4"></i>
                    <span>Music</span>
                </li>
                <li className="py-2">
                    <i className="fa-solid fa-clapperboard mr-4"></i>
                    <span>Movies</span>
                </li>
                <li className="py-2">
                    <i className="fa-solid fa-satellite-dish mr-4"></i>
                    <span>Live</span>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
