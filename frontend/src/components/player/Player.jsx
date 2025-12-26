import { Pause, Play, SkipBack, SkipForward } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from "moment";
import { songs } from '../../utils/songs';
import LikeSong from './LikeSong';
import { pause, play, playSong } from '../../features/songSlice';
import Volume from './Volume';

const Player = () => {
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const song = songs;
    const audioref = useRef();
    const dispatch = useDispatch();
    const { currentSong, isPlaying } = useSelector(state => state.song);

    useEffect(() => {
        if (currentSong && isPlaying) {
            audioref.current.play()
        } else {
            audioref.current.pause()
        }
    }, [currentSong, isPlaying])

    const handleUpdateTime = () => {
        setCurrentTime(audioref.current.currentTime);
        setDuration(audioref.current.duration)
    }

    const formatTime = (time) => {
        return moment.utc(time * 1000).format("mm:ss");
    };

    const handleSeekTime = (e) => {
        const nt = e.target.value;
        audioref.current.currentTime = nt;
        setCurrentTime(nt);
    };

    const handleForwardSong = () => {
        const length = songs.length;
        let nextSong = song[currentSong?.id + 1 < length ? currentSong?.id + 1 : 0];
        dispatch(playSong(nextSong))
    }

    const handlePreviousSong = () => {
        const length = songs.length;
        let previouSong = song[currentSong?.id > 0 ? currentSong?.id - 1 : length - 1]
        dispatch(playSong(previouSong))
    }

    return (
        <div className='h-20 flex items-center justify-between px-8'>
            <LikeSong />

            <div className={`flex flex-col items-center gap-3 w-[35%] ${!currentSong ? "opacity-40 cursor-not-allowed pointer-events-none" : "opacity-100"}`}>
                <div className={`h-full flex items-center justify-center gap-5 cursor-pointer`}>
                    <SkipBack onClick={handlePreviousSong} className="text-gray-400 hover:text-white transition cursor-pointer" />

                    {isPlaying ? (
                        <Pause onClick={() => dispatch(pause())} className='h-7 w-7 text-white hover:scale-105 transition' />
                    ) : (
                        <Play onClick={() => dispatch(play())} className='h-7 w-7 text-white hover:scale-105 transition' />
                    )}

                    <SkipForward onClick={handleForwardSong} className="text-gray-400 hover:text-white transition cursor-pointer" />
                </div>
                <div className='flex items-center gap-3 w-full text-white'>
                    <div className="text-xs text-gray-400">
                        {formatTime(currentTime)}
                    </div>

                    <div className='flex-1 h-1 rounded-full relative'>
                        <input
                            min={0}
                            max={duration || 0}
                            value={currentTime}
                            onChange={handleSeekTime}
                            className='absolute h-full w-full rounded-full cursor-pointer accent-green-500 border-0' type="range" />
                    </div>

                    <div className="text-xs text-gray-400">
                        {formatTime(duration)}
                    </div>
                </div>
            </div>

            <Volume audioref={audioref} />

            <audio onTimeUpdate={handleUpdateTime} ref={audioref} src={currentSong?.songUrl}></audio>
        </div>
    )
}

export default Player