import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { updateView } from '../../reducers/TimerReducer';

export default function ClockButtonComponent () {

    const dispatch = useDispatch()

    return (
        <Button variant="outlined" name="clock" className="view-button" onClick={(e) => dispatch((updateView(e.target.name)))}>Clock</Button>
    )
}