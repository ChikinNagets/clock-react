import { Button } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import TimerInpuComponent from './TimerInputComponent';

export default function TimerComponent () {

    const timerValues = useSelector((state) => state.timer)
    const [ seconds, setSeconds ] = useState(timerValues.value)
    const timerId = useRef()

    const startTimer = () => {
        timerId.current  = setInterval(() => {
            setSeconds(prev => prev - 1)
        }, 1000)
        if(seconds <= 0) {
            stopTimer()
            console.log("timer is stopped")
        }
    }

    const stopTimer = () => {
        clearInterval(timerId.current)
        timerId.current = timerValues.value
    }

    const resetTimer = () => {
        stopTimer
        if (seconds) {
            setSeconds(timerValues.value)
        }
    }

    return (
        <div>
            <div>Second: {seconds}</div>
            <br /><br />
            <TimerInpuComponent />
            <br /><br />
            <Button variant="text" onClick={startTimer}>Start</Button>
            <Button variant="text" onClick={stopTimer}>Stop</Button>
            <Button variant="text" onClick={resetTimer}>Reset</Button>
        </div>
    )
}