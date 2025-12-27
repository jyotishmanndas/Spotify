import React, { useMemo } from 'react'
import { songs } from '../utils/songs'
import SongsCard from "../components/player/SongsCard"
import { useSelector } from 'react-redux'

const Songs = () => {
    const currentSongs = songs;
    const { query } = useSelector(state => state.search);

    const filteredSong = useMemo(() => {
        return currentSongs.filter((s) => s.title.toLowerCase().includes(query.toLowerCase()))
    }, [currentSongs, query])

    return (
        <div className='flex items-center justify-center flex-wrap gap-3'>
            {filteredSong && filteredSong.length > 0 ? (
                <>
                    {filteredSong.map((song) => (
                        <SongsCard key={song.id} song={song} />
                    ))}
                </>
            ) : (
                <span className="text-xl font-semibold text-white text-center">
                    No results found
                </span>
            )}
        </div>
    )
}

export default Songs