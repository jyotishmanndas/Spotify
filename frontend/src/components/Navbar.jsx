import React from 'react'
import { Search, Home, LogOutIcon, ChevronRight, ChevronLeft } from "lucide-react"
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux';
import { logOut } from '../features/authSlice';

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className='h-16 px-10 flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <div className='w-11 rounded-full'>
                    <img className='h-full w-full object-cover' src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_White.png" alt="" />
                </div>

                <div className='group flex items-center gap-2'>
                    <ChevronLeft onClick={() => navigate("/home")} size={30} className='text-neutral-400 hover:text-neutral-200 group-hover:scale-110 transition cursor-pointer' />
                    <ChevronRight size={30} className='text-neutral-400 hover:text-neutral-200 cursor-pointer' />
                </div>
            </div>

            <div className='w-[30%] h-12 flex items-center relative'>
                <Search className='absolute left-3 text-white' />
                <input className='w-full h-full rounded-full px-11 bg-[#2A2A2A] text-white' type="text" placeholder='What do you want to play?' />
            </div>

            <div>
                <button onClick={() => dispatch(logOut())} className='px-4 py-2.5 bg-white text-black rounded-full flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform duration-200 group'>
                    <LogOutIcon className='h-5 w-5 group-hover:scale-110 transition-transform duration-200' />
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Navbar