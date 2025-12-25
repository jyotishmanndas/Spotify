import { createSlice } from "@reduxjs/toolkit";

const playlistSongSlice = createSlice({
    name: "playlistSong",
    initialState: {
        playlist: JSON.parse(localStorage.getItem("playlist")) || []
    },

    reducers: {
        likeSong: (state, action) => {
            state.playlist.push(action.payload)
        },
        removeSong: (state, action) => {
            state.playlist = action.payload
        }
    }
})

export const { likeSong, removeSong } = playlistSongSlice.actions;
export default playlistSongSlice.reducer