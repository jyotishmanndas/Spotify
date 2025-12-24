import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
    name: "song",
    initialState: {
        currentSong: null,
        isPlaying: false
    },
    reducers: {
        playSong: (state, action) => {
            state.currentSong = action.payload
        },
        play: (state) => {
            state.isPlaying = true
        },
        pause: (state) => {
            state.isPlaying = false
        }
    }
});

export const {playSong, play, pause} = songSlice.actions;
export default songSlice.reducer;