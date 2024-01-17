import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setMenuCloseStatus } from "../../../utils/app-slice";

const WatchPage = () => {
    const [searchParams] = useSearchParams();

    // URLSearchParams has a method get where we pass the key name
    console.log(searchParams.get("v"));

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setMenuCloseStatus(true));
    }, []);

    return (
        <div className="col-span-11">
            <iframe
                className="col-span-8"
                width="560"
                height="315"
                src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default WatchPage;
