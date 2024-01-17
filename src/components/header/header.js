import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMenuCloseStatus, toggleMenu } from "../../utils/app-slice";

const Header = () => {
    const dispatch = useDispatch();

    const isMenuClosed = useSelector((store) => store.app.isMenuClosed);

    const onToggleMenu = () => {
        if (isMenuClosed) {
            dispatch(setMenuCloseStatus(false));
            return;
        }
        dispatch(toggleMenu());
    };

    return (
        <div className="grid grid-flow-col h-14 p-2 m-2">
            <div id="icon-section" className="flex col-span-2">
                <i
                    id="menu-icon"
                    className="fa-solid fa-bars text-2xl my-auto cursor-pointer"
                    onClick={() => onToggleMenu()}
                ></i>
                <img
                    className="logo h-10 mx-3"
                    alt="logo"
                    src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
                />
            </div>

            <div id="search-section" className="col-span-8 flex justify-center">
                <input
                    type="text"
                    data-testid="search-input"
                    placeholder="Search for restaurant"
                    className="search-bar rounded-l-full w-7/12 border py-2 px-5 shadow-inner focus:border-blue-600 focus-visible:border-blue-600"
                />
                <i
                    data-testid="search-btn"
                    className="fa-solid fa-magnifying-glass rounded-r-full border w-1/12 p-3 text-center bg-gray-100 text-black hover:bg-gray-200"
                ></i>
            </div>

            <div id="profile-section" className=" flex justify-end col-span-2">
                <i
                    id="notification"
                    className="fa-regular fa-bell text-2xl my-auto mx-6"
                ></i>
                <i
                    id="profile-icon"
                    className="fa-solid fa-user text-2xl my-auto "
                ></i>
            </div>
        </div>
    );
};

export default Header;
