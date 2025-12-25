import React from 'react'
import { songs } from '../utils/songs'
import SongsCard from "../components/player/SongsCard"


const Songs = () => {
    return (
        <div className='flex items-center justify-center flex-wrap gap-3'>
            {songs.map((song) => (
                <SongsCard key={song.id} song={song} />
            ))}
        </div>
    )
}

export default Songs