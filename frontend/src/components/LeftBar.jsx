import { Heart, Pin } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const LeftBar = () => {
    const navigate = useNavigate();
    const { playlist } = useSelector(state => state.playlistSong)

    return (
        <div className="h-full bg-[#121212] w-[20%] rounded-lg p-2">
            <div onClick={() => navigate("/playlist")} className='flex gap-4 hover:bg-[#1F1F1F] transition-colors px-3 py-2 rounded-md cursor-pointer'>
                <div className="flex items-center justify-center h-14 w-14 rounded-md bg-gradient-to-br from-purple-400 to-indigo-400">
                    <Heart className="text-white fill-white" />
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
        </div>

    )
}

export default LeftBar