import React from 'react'
import { Search, Home, LogOutIcon } from "lucide-react"

const Navbar = () => {
    return (
        <div className='h-16 px-10 flex items-center justify-between'>
            <div className='w-11 rounded-full'>
                <img className='h-full w-full object-cover' src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_White.png" alt="" />
            </div>

            <div className='w-[30%] h-12 flex items-center relative'>
                <Search className='absolute left-3 text-white' />
                <input className='w-full h-full rounded-full px-11 bg-[#2A2A2A] text-white' type="text" placeholder='What do you want to play?' />
            </div>

            <div>
                <button className='px-4 py-2.5 bg-white text-black rounded-full flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform duration-200 group'>
                    <LogOutIcon className='h-5 w-5 group-hover:scale-110 transition-transform duration-200' />
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Navbar