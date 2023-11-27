import { Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PauseIcon from '@mui/icons-material/Pause';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

export default function StopWatchComponent () {
    const timerValues = useSelector((state) => state.timer)
    const [ seconds, setSeconds ] = useState(0)
    const timerId = useRef()

    const startTimer = () => {
        timerId.current  = setInterval(() => {
            setSeconds(prev => prev + 1)
        }, 1000)
    }

    const stopTimer = () => {
        clearInterval(timerId.current)
        timerId.current = timerValues.value
    }

    const resetTimer = () => {
        stopTimer
        if (seconds) {
            setSeconds(0)
        }
    }

    return (
        <div>
            <div>Second: {seconds}</div>
            <br />
            <div className='timer-button-container'>
                <Button variant="text" className="view-button" startIcon={<PlayArrowIcon sx={{ marginLeft: 0, marginRight: 0 }}/>} onClick={startTimer}></Button>
                <Button variant="text" className="view-button" startIcon={<PauseIcon sx={{ marginLeft: 0, marginRight: 0 }}/>} onClick={stopTimer}></Button>
                <Button variant="text" className="view-button" startIcon={<RestartAltIcon sx={{ marginLeft: 0, marginRight: 0 }}/>} onClick={resetTimer}></Button>
            </div>
        </div>
    )
}