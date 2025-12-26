import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: JSON.parse(localStorage.getItem("login-user")) || null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        logOut: (state) => {
            state.user = localStorage.removeItem("login-user");
            state.user = null
        }
    }
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;