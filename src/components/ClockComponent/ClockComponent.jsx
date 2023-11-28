import { useEffect, useState } from 'react'
import moment from 'moment';

import './clock.css'

export default function DisplayComponent () {
    const [date, setDate] = useState()
    const [time, setTime] = useState()

    useEffect(() => {

        setInterval(() => {
          setDate(moment().format("MMM Do YY"))
          setTime(moment().format('LT'))
        }, 1000)
    
      }, [])

    return (
      <div>
        <div className='time-display'>{date}</div>
      <div className='time-display'>{time}</div>
      </div>
    )
}