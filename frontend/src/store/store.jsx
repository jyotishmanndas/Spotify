import { configureStore } from '@reduxjs/toolkit'
import songSlice from "../features/songSlice"
import playlistSongSlice from "../features/playlistSongSlice"
import authSlice from "../features/authSlice"
import searchSlice from "../features/searchSlice";

export const store = configureStore({
    reducer: {
        song: songSlice,
        playlistSong: playlistSongSlice,
        auth: authSlice,
        search: searchSlice
    },
})