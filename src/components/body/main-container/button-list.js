import React from "react";
import Button from "./button";

const buttonList = [
    "All",
    "Music",
    "Arijit Singh",
    "Mixes",
    "Live",
    "Meditation Music",
    "Playlist",
    "Indian pop music",
    "JavaScript",
    "Calligraphy",
    "Painting",
];

const ButtonList = () => {
    return (
        <div className="p-2 m-2 flex">
            {buttonList.map((buttonElement, index) => (
                <Button
                    name={buttonElement}
                    id={buttonElement + "-" + index}
                    key={buttonElement + "-" + index}
                />
            ))}
        </div>
    );
};

export default ButtonList;
