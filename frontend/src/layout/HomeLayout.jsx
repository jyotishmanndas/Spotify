import React from 'react'
import Navbar from '../components/Navbar'
import LeftBar from '../components/LeftBar'
import { Outlet } from 'react-router'
import RightBar from '../components/RightBar'
import Player from '../components/Player'

const HomeLayout = () => {
    return (
        <div className='h-screen bg-black'>
            <Navbar />
            <div className='h-[80%] flex gap-3 px-2 py-2'>
                <LeftBar />

                <div className='w-[60%] p-5 rounded-lg bg-[#121212]'>
                    <Outlet />
                </div>

                <RightBar />
            </div>
            <Player />
        </div>
    )
}

export default HomeLayout