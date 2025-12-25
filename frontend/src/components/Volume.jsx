import { Volume2, VolumeOff } from 'lucide-react'
import React from 'react'
import { setVolume } from '../features/songSlice';
import { useDispatch, useSelector } from 'react-redux';

const Volume = ({ audioref }) => {
    const dispatch = useDispatch();
    const { volume } = useSelector(state => state.song);

    const handleVolume = (e) => {
        const vol = Number(e.target.value);
        dispatch(setVolume(vol));
        audioref.current.volume = vol
    }

    const toggleMute = () => {
        const newVol = volume === 0 ? 0.5 : 0;
        dispatch(setVolume(newVol));
        audioref.current.volume = newVol;
    };

    return (
        <div className='flex items-center gap-3 w-[20%]'>
            {
                volume === 0 ? (
                    <VolumeOff onClick={toggleMute} className='text-gray-400' />
                ) : (
                    <Volume2 onClick={toggleMute} className='text-gray-400' />
                )
            }
            <input
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={handleVolume}
                className='h-1 accent-green-500' type="range" />
        </div>
    )
}

export default Volume