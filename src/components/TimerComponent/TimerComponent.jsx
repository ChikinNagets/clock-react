import { Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PauseIcon from '@mui/icons-material/Pause';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import TimerInpuComponent from './TimerInputComponent';

import './timerComponent.css'

export default function TimerComponent () {

    const timerValues = useSelector((state) => state.timer)
    const [delay, setDelay] = useState(+timerValues.value);
    const minutes = Math.floor(delay / 60);
    const seconds = Math.floor(delay % 60);
    // const [ seconds, setSeconds ] = useState(timerValues.value)
    const timerId = useRef()

    const startTimer = () => {
        if (seconds > 0) {
            timerId.current  = setInterval(() => {
                setDelay(prev => prev - 1)
            }, 1000)
        }
    }

    const stopTimer = () => {
        clearInterval(timerId.current)
        timerId.current = timerValues.value
    }

    const resetTimer = () => {
        stopTimer()
        setDelay(timerValues.value)
    }

    if (seconds <= 0) {
        stopTimer()
    }

    return (
        <div>
            <p>
                {minutes}:{seconds}
            </p>
            <br />
            <TimerInpuComponent />
            <br />
            <div className='timer-button-container'>
                <Button variant="text" className="view-button" startIcon={<PlayArrowIcon sx={{ marginLeft: 0, marginRight: 0 }}/>} onClick={startTimer}></Button>
                <Button variant="text" className="view-button" startIcon={<PauseIcon sx={{ marginLeft: 0, marginRight: 0 }}/>} onClick={stopTimer}></Button>
                <Button variant="text" className="view-button" startIcon={<RestartAltIcon sx={{ marginLeft: 0, marginRight: 0 }}/>} onClick={resetTimer}></Button>
            </div>
        </div>
    )
}