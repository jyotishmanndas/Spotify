import React from 'react'
import { useSelector } from 'react-redux'

const RightBar = () => {
  const { isPlaying } = useSelector(state => state.song)

  return (
    <div className='h-full w-[20%] bg-[#121212]  rounded-lg p-3'>
      <div className='w-full rounded-full overflow-hidden'>
        <img src="https://p7.hiclipart.com/preview/865/176/13/phonograph-record-lp-record-record-shop-sound-recording-and-reproduction-clip-art-black-cd.jpg" className={`h-full w-full rounded-full object-contain alt="" ${isPlaying ? "rotate" : "rotate paused"}`} />
      </div>
    </div>
  )
}

export default RightBar