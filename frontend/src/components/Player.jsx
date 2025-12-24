import { ChevronFirst, ChevronLast, Pause, Play, SkipBack, SkipForward, Volume2 } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pause, play } from '../features/songSlice';
import { songs } from '../utils/songs';

const Player = () => {
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

    return (
        <div className='h-20 flex items-center justify-between px-5'>
            <div className='flex items-center gap-3'>
                <div className='h-14 w-14 rounded-lg'>
                    <img className='h-full w-full rounded-lg object-cover' src="https://m.media-amazon.com/images/S/pv-target-images/2511c131f9b0dd970c80d428e2e510168490e426d5010636fc33fbb880c1f3cd.jpg" alt="" />
                </div>
                <div className='flex flex-col'>
                    <span className='text-sm font-semibold text-white'>{currentSong?.name}</span>
                    <span className='text-xs text-gray-400'>{currentSong?.singer}</span>
                </div>
            </div>
            <div className='flex flex-col items-center gap-3 w-[35%]'>
                <div className='h-full flex items-center justify-center gap-5 cursor-pointer'>
                    <SkipBack className="text-gray-400 hover:text-white transition" />
                    {isPlaying ? (
                        <Pause onClick={() => dispatch(pause())} className='h-7 w-7 text-white hover:scale-105 transition' />
                    ) : (
                        <Play onClick={() => dispatch(play())} className='h-7 w-7 text-white hover:scale-105 transition' />
                    )}
                    <SkipForward className="text-gray-400 hover:text-white transition"  />
                </div>
                <div className='w-full h-1 bg-red-600 rounded-md'>

                </div>
            </div>

            <div className='flex items-center hap-3'>
                <Volume2 />
                <input type="range" />
            </div>

            <audio ref={audioref} src={currentSong?.url}></audio>
        </div>
    )
}

export default Player