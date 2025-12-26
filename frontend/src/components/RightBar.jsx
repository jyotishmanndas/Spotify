import React from 'react'
import { useSelector } from 'react-redux'

const RightBar = () => {
  const { currentSong, isPlaying } = useSelector(state => state.song)

  return (
    <div className='h-full w-[20%] bg-[#121212]  rounded-lg p-5'>
      <div className='w-full rounded-full overflow-hidden'>
        <img src="https://p7.hiclipart.com/preview/865/176/13/phonograph-record-lp-record-record-shop-sound-recording-and-reproduction-clip-art-black-cd.jpg" className={`h-full w-full rounded-full object-contain alt="" ${isPlaying ? "rotate" : "rotate paused"}`} />
      </div>

      <div className='mt-8 flex flex-col'>
        <span className='text-3xl text-white font-bold'>{currentSong?.title}</span>
        <span className='text-neutral-400 text-lg hover:text-neutral-200 transition-colors cursor-pointer'>{currentSong?.artist}</span>
      </div>
    </div>
  )
}

export default RightBar