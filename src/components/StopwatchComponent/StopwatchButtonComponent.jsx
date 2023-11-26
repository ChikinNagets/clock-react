import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { updateView } from '../../reducers/TimerReducer';

export default function StopwatchButtonComponent () {

    const dispatch = useDispatch()

    return (
        <Button variant="outlined" name="stopwatch" onClick={(e) => dispatch((updateView(e.target.name)))}>Stopwatch</Button>
    )
}