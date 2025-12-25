import { configureStore } from '@reduxjs/toolkit'
import songSlice from "../features/songSlice"
import playlistSongSlice from "../features/playlistSongSlice"

export const store = configureStore({
    reducer: {
        song: songSlice,
        playlistSong: playlistSongSlice
    },
})