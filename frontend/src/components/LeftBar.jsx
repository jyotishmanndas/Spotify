import { Heart, Pin } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const LeftBar = () => {

    const { playlist } = useSelector(state => state.playlistSong)

    return (
        <div className="h-full bg-[#121212] w-[20%] rounded-lg p-5">
            <div className='flex gap-4'>
                <div className="flex items-center justify-center h-14 w-14 rounded-md bg-red-500">
                    <Heart className="text-white" />
                </div>

                <div className="flex flex-col gap-1">
                    <span className="text-green-500 font-semibold">
                        Liked Songs
                    </span>

                    <div className="flex items-center gap-1 text-sm text-gray-400">
                        <Pin size={14} className="text-green-600 fill-green-600" />
                        <span className='font-medium text-[16px]'>Playlist</span>
                        <span>•</span>
                        <span className='font-medium text-[15px]'>{playlist?.length} songs</span>
                    </div>
                </div>
            </div>

            <div className='flex-1'>
                {playlist.map((s) => (
                    <div key={s.id} className='text-gray-300'>{s.title}</div>
                ))}
            </div>
        </div>

    )
}

export default LeftBar