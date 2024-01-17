import React from "react";

const Button = ({ name, id }) => {
    return (
        <button
            key={id}
            className="rounded-xl bg-gray-100 hover:bg-gray-200 px-3 py-2 mx-2 font-semibold"
        >
            {name}
        </button>
    );
};

export default Button;
