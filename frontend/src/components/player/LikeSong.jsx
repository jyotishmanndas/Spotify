import { CircleCheck, PlusCircle } from 'lucide-react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { likeSong, removeSong } from '../../features/playlistSongSlice';

const LikeSong = () => {
    const [like, setIsLike] = useState(() => {
        return JSON.parse(localStorage.getItem("playlist")) || []
    });

    const dispatch = useDispatch();
    const { currentSong } = useSelector(state => state.song);

    const handlePlaylist = () => {
        dispatch(likeSong(currentSong));
        setIsLike([...like, currentSong])
        localStorage.setItem("playlist", JSON.stringify([...like, currentSong]))
    };

    const removeFromPlaylist = () => {
        dispatch(removeSong(currentSong.id));
        const updateLikes = like.filter((s) => s.id !== currentSong.id);
        setIsLike(updateLikes);
        localStorage.setItem("playlist", JSON.stringify(updateLikes))
    }

    const isLiked = like.some((s) => s.id === currentSong?.id);

    return (
        <div className='flex items-center gap-3 w-[20%]'>
            {currentSong && (
                <>
                    <div className='h-14 w-14 rounded-lg'>
                        <img className='h-full w-full rounded-lg object-cover' src={currentSong?.img} alt={currentSong?.title} />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-sm font-semibold text-white line-clamp-2'>{currentSong?.title}</span>
                        <span className='text-xs text-gray-400 line-clamp-2'>{currentSong?.artist}</span>
                    </div>

                    <div className='ml-5'>
                        {isLiked ? (
                            <CircleCheck onClick={removeFromPlaylist} className='fill-green-500 cursor-pointer' size={23} />
                        ) : (
                            <PlusCircle onClick={handlePlaylist} className='text-gray-400 cursor-pointer' size={20} />
                        )}
                    </div>
                </>
            )}
        </div>
    )
}

export default LikeSong