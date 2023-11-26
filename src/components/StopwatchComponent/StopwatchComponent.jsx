import { Button } from '@mui/material';
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
            <br /><br />
            <Button variant="text" onClick={startTimer}>Start</Button>
            <Button variant="text" onClick={stopTimer}>Stop</Button>
            <Button variant="text" onClick={resetTimer}>Reset</Button>
        </div>
    )
}