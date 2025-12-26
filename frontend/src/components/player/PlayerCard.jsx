import { Pause, Play } from 'lucide-react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pause, playSong } from '../../features/songSlice';

const PlayerCard = () => {
    const dispatch = useDispatch();
    const { playlist } = useSelector(state => state.playlistSong);
    const { currentSong, isPlaying } = useSelector(state => state.song);

    return (
        <div className='flex flex-col mt-3 gap-1'>
            {playlist.map((p) => (
                <div key={p.id} className="group grid grid-cols-[4fr_3fr_1fr] items-center px-3 py-2 rounded-sm hover:bg-neutral-600 transition-colors duration-200">
                    <div className='flex items-center gap-4'>
                        <div className='relative h-10 w-10 rounded-lg overflow-hidden'>
                            <img className='h-full w-full object-cover transition-opacity group-hover:opacity-50' src={p.img} alt={p.title} />
                            
                            <div onClick={() =>
                                isPlaying && currentSong?.id === p.id
                                    ? dispatch(pause())
                                    : dispatch(playSong(p))
                            } className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity`}>
                                {isPlaying && currentSong?.id === p.id ? <Pause size={20} className="text-white fill-white" /> : <Play size={20} className="text-white fill-white" />}
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-[17px] font-semibold text-white line-clamp-2'>{p.title}</span>
                            <span className='text-sm text-neutral-300 font-medium line-clamp-2'>{p.artist}</span>
                        </div>
                    </div>

                    <span className='font-semibold text-neutral-200 truncate'>{p.title}</span>
                    <span className='font-semibold text-neutral-200'>4.04</span>
                </div>
            ))}
        </div>
    )
}

export default PlayerCard