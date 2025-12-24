import React from 'react'
import { songs } from '../utils/songs'
import { Play } from "lucide-react"
import SongsCard from '../components/SongsCard'

const Songs = () => {
    return (
        <div className='flex items-center justify-center gap-3'>
            {songs.map((song) => (
                <SongsCard key={song.id} song={song} />
            ))}
        </div>
    )
}

export default Songs