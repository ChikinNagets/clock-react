import Button from '@mui/material/Button';
import TimerIcon from '@mui/icons-material/Timer';
import { useDispatch } from 'react-redux';
import { updateView } from '../../reducers/TimerReducer';

export default function TimerButtonComponent () {

    const dispatch = useDispatch()

    return (
        <Button variant="outlined" startIcon={<TimerIcon sx={{ marginLeft: 0, marginRight: 0 }}/>} name="timer" className="view-button" onClick={(e) => dispatch((updateView(e.target.name)))}></Button>
    )
}