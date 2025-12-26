import { Pause, Play } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { pause, playSong } from "../../features/songSlice";

const SongsCard = ({ song }) => {
    const dispatch = useDispatch();
    const { currentSong, isPlaying } = useSelector((state) => state.song);

    const isCurrentSongPlaying = isPlaying && currentSong?.id === song.id;

    return (
        <div className="group w-48 p-3 hover:rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer">
            <div className="relative h-44 w-full rounded-lg overflow-hidden shadow-lg">
                <img
                    src={song.img}
                    alt={song.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />

                <button
                    onClick={() =>
                        isCurrentSongPlaying
                            ? dispatch(pause())
                            : dispatch(playSong(song))
                    }
                    className={`absolute bottom-3 right-3 h-12 w-12 rounded-full flex items-center justify-center bg-green-500 text-black shadow-xl transition-all duration-300 ${isCurrentSongPlaying
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 cursor-pointer"} `} >
                    {isCurrentSongPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>
            </div>

            <div className="mt-3 space-y-1">
                <p className="text-sm font-semibold text-white truncate">
                    {song.title}
                </p>
                <p className="text-xs text-gray-400 truncate">
                    {song.artist}
                </p>
            </div>
        </div>
    );
};

export default SongsCard;
