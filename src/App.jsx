import { useState } from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import ClockComponent from './components/ClockComponent/ClockComponent'
import ClockButtonComponent from './components/ClockComponent/ClockButtonComponent'
import TimerButtonComponent from './components/TimerComponent/TimerButtonComponent'
import TimerInputComponent from './components/TimerComponent/TimerInputComponent'
import TimerComponent from './components/TimerComponent/TimerComponent'
import StopwatchButtonComponent from './components/StopwatchComponent/StopwatchButtonComponent'
import StopWatchComponent from './components/StopwatchComponent/StopwatchComponent'



function App() {

  const timerValues = useSelector((state) => state.timer)

  return (
    <div>
      <h2 className='welcome-message'>Welcome to your clock</h2>
      { timerValues.view == "clock" ? <ClockComponent /> : timerValues.view == "timer" ? <TimerComponent /> : <StopWatchComponent /> }
      <div className='components-container'>
        <ClockButtonComponent />
        <TimerButtonComponent />
        <StopwatchButtonComponent />
      </div>
    </div>
  )
}

export default App
