import { Play } from 'lucide-react'
import React from 'react'

const SongsCard = ({ song }) => {
    return (
        <div className='h-64 w-48 p-3 rounded-lg hover:bg-neutral-500 transition-all duration-200 cursor-pointer group'>
            <div className='h-44 w-full bg-blue-400 rounded-lg relative'>
                <img className='h-full w-full object-cover rounded-lg' src="https://i.scdn.co/image/ab6761610000e5eb155a680a466ced2ee6679e54" alt="" />
                <div
                    className='h-12 w-12 bg-green-500 rounded-full absolute right-3 bottom-3 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg'>
                    <Play />
                </div>
            </div>

            <div className='mt-3'>
                <div className='text-gray-300'>
                    {song.name}
                </div>
                <div className='text-gray-300'>
                    {song.singer}
                </div>
            </div>
        </div>
    )
}

export default SongsCard