import { Button } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import TimerInpuComponent from './TimerInputComponent';

import './timerComponent.css'

export default function TimerComponent () {

    const timerValues = useSelector((state) => state.timer)
    const [ seconds, setSeconds ] = useState(timerValues.value)
    const timerId = useRef()

    const startTimer = () => {
        if (seconds > 0) {
            timerId.current  = setInterval(() => {
                setSeconds(prev => prev - 1)
            }, 1000)
        }
    }

    const stopTimer = () => {
        clearInterval(timerId.current)
        timerId.current = timerValues.value
    }

    const resetTimer = () => {
        stopTimer()
        if (seconds) {
            setSeconds(timerValues.value)
        }
    }

    if (seconds <= 0) {
        stopTimer()
    }

    return (
        <div>
            <div>Second: {seconds}</div>
            <br />
            <TimerInpuComponent />
            <br />
            <div className='timer-button-container'>
                <Button variant="text" className="view-button" onClick={startTimer}>Start</Button>
                <Button variant="text" className="view-button" onClick={stopTimer}>Stop</Button>
                <Button variant="text" className="view-button" onClick={resetTimer}>Reset</Button>
            </div>
        </div>
    )
}