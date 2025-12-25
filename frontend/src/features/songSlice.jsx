import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
    name: "song",
    initialState: {
        currentSong: null,
        isPlaying: false,
        volume: 1
    },
    reducers: {
        playSong: (state, action) => {
            state.currentSong = action.payload
            state.isPlaying = true
        },
        play: (state) => {
            state.isPlaying = true
        },
        pause: (state) => {
            state.isPlaying = false
        },
        setVolume: (state, action) => {
            state.volume = action.payload
        }
    }
});

export const { playSong, play, pause, setVolume } = songSlice.actions;
export default songSlice.reducer;