import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import { searchQuery } from '../features/searchSlice';


const InputBar = () => {
    const [searchSong, setSearchSong] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        let timer = setTimeout(() => {
            dispatch(searchQuery(searchSong))
        }, 500)

        return () => {
            clearTimeout(timer)
        }

    }, [searchSong])

    return (
        <div className='w-[30%] h-12 flex items-center relative'>
            <Search className='absolute left-3 text-white' />
            <input onChange={(e) => setSearchSong(e.target.value)}
                type="text"
                className='w-full h-full rounded-full px-11 bg-[#2A2A2A] text-white'
                placeholder='What do you want to play?' />
        </div>
    )
}

export default InputBar