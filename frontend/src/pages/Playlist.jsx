import { Heart, Play, Shuffle } from 'lucide-react'
import React from 'react'
import PlayerCard from '../components/player/PlayerCard'

const Playlist = () => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-6 p-4 pb-6 bg-gradient-to-b from-[#3a0f2d] to-[#121212]">
        <div className="w-36 h-36 rounded-md bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center shadow-lg">
          <Heart strokeWidth={0.5} size={80} className="fill-white text-white" />
        </div>

        <div className="flex flex-col justify-end gap-4">
          <span className="text-lg tracking-wider text-neutral-300">
            Playlist
          </span>
          <span className="text-7xl font-bold text-white">
            Liked Songs
          </span>
        </div>
      </div>

      <div className="flex items-center gap-6 mt-6">
        <button className="h-14 w-14 bg-green-500 rounded-full flex items-center justify-center hover:scale-105 transition">
          <Play className="fill-black ml-1" />
        </button>

        <Shuffle size={30} className="text-neutral-400 hover:text-white cursor-pointer" />
      </div>

      <div className="grid grid-cols-[4fr_3fr_1fr] gap-4 px-5 mt-6 pb-3 border-b border-neutral-700 text-sm text-neutral-400">
        <span>Title</span>
        <span>Album</span>
        <span className="text-right">Duration</span>
      </div>

      <PlayerCard />
    </div>
  )
}

export default Playlist
