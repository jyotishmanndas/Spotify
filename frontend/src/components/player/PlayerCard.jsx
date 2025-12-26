import { Play } from 'lucide-react';
import React from 'react'
import { useSelector } from 'react-redux'

const PlayerCard = () => {
    const { playlist } = useSelector(state => state.playlistSong);
    const { currentSong, isPlaying } = useSelector(state => state.song)

    return (
        <div className='flex flex-col mt-3 px-3'>
            {playlist.map((p) => (
                <div className={`flex items-center justify-between hover:bg-neutral-400 transition-colors duration-200 p-3 rounded-md ${isPlaying ? "opacity-100" : "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 cursor-pointer"}`}>
                    <div className='flex items-center gap-4'>
                        {isPlaying && <Play size={15} />}
                        <div className='h-10 w-10 rounded-lg'>
                            <img className='h-full w-full rounded-lg object-cover' src={p.img} alt={p.title} />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-[17px] font-semibold text-white line-clamp-2'>{p.title}</span>
                            <span className='text-sm text-neutral-300 font-medium line-clamp-2'>{p.artist}</span>
                        </div>
                    </div>

                    <div>
                        <span className='font-semibold text-neutral-200 truncate'>{p.title}</span>
                    </div>

                    <div>
                        <span className='font-semibold text-neutral-200'>4.04</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PlayerCard