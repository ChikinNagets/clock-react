import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { updateView } from '../../reducers/TimerReducer';

export default function TimerButtonComponent () {

    const dispatch = useDispatch()

    return (
        <Button variant="outlined" name="timer" onClick={(e) => dispatch((updateView(e.target.name)))}>Timer</Button>
    )
}