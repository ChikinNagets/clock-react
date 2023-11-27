import { Input } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateInputValue } from '../../reducers/TimerReducer';

export default function TimerComponent () {

    const dispatch = useDispatch()

    return (
        <div className='timer-input-container'>
            <Input 
                className='timer-input'
                placeholder='Select you timer value' 
                onChange={(e) => dispatch((updateInputValue(e.target.value)))}>
            </Input>
        </div>
    )
}