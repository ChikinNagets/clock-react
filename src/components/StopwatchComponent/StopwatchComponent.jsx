import { Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PauseIcon from '@mui/icons-material/Pause';
import React, { useState, useEffect } from "react";

export default function StopWatchComponent () {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = time % 100;

    useEffect(() => {
        let intervalId;
        if (isRunning) {
          intervalId = setInterval(() => setTime(time + 1), 10);
        }
        return () => clearInterval(intervalId);
    }, [isRunning, time]);

    const startAndStop = () => {
        setIsRunning(!isRunning);
      };

    const reset = () => {
        setTime(0);
    };

    return (
        <div className="stopwatch-container">
          <p className="stopwatch-time">
            {hours}:{minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}:
            {milliseconds.toString().padStart(2, "0")}
          </p>
          <br />
          <div className="stopwatch-buttons">
            <Button className="stopwatch-button" startIcon={!isRunning ? <PlayArrowIcon sx={{ marginLeft: 0, marginRight: 0 }} /> : <PauseIcon sx={{ marginLeft: 0, marginRight: 0 }}/> } onClick={() => startAndStop()}></Button>
            <Button className="stopwatch-button" startIcon={<RestartAltIcon sx={{ marginLeft: 0, marginRight: 0 }}/>} onClick={() => reset()}></Button>
          </div>
          <br />
        </div>
    );
}