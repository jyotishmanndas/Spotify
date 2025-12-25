import { PlusCircle } from 'lucide-react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { likeSong } from '../features/playlistSongSlice';

const LikeSong = () => {
    const [like, setIsLike] = useState([]);

    const dispatch = useDispatch();
    const { currentSong } = useSelector(state => state.song);

    const handlePlaylist = () => {
        dispatch(likeSong(currentSong));
        setIsLike([...like, currentSong])
        localStorage.setItem("playlist", JSON.stringify([...like, currentSong]))
    }

    return (
        <div className='flex items-center gap-3 w-[20%]'>
            {currentSong && (
                <>
                    <div className='h-14 w-14 rounded-lg'>
                        <img className='h-full w-full rounded-lg object-cover' src={currentSong?.img} alt={currentSong?.title} />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-sm font-semibold text-white'>{currentSong?.title}</span>
                        <span className='text-xs text-gray-400'>{currentSong?.artist}</span>
                    </div>

                    <div className='ml-5'>
                        <PlusCircle onClick={handlePlaylist} className='text-white cursor-pointer' size={20} />
                    </div>
                </>
            )}
        </div>
    )
}

export default LikeSong