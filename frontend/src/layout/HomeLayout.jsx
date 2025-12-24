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
            <div className='h-[80%] bg-red-500 flex gap-3 px-2 py-2'>
                <LeftBar />

                <div className='w-[60%] p-5 bg-pink-500 rounded-lg'>
                    <Outlet />
                </div>

                <RightBar />
            </div>
            <Player />
        </div>
    )
}

export default HomeLayout