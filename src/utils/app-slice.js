import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuExpanded: true,
        isMenuClosed: false,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuClosed = false;
            state.isMenuExpanded = !state.isMenuExpanded;
        },
        setMenuCloseStatus: (state, action) => {
            state.isMenuClosed = action.payload;
        },
    },
});

export const { toggleMenu, setMenuCloseStatus } = appSlice.actions;
export default appSlice.reducer;
