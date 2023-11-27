import Button from '@mui/material/Button';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { useDispatch } from 'react-redux';
import { updateView } from '../../reducers/TimerReducer';

export default function StopwatchButtonComponent () {

    const dispatch = useDispatch()

    return (
        <Button variant="outlined" startIcon={<ScheduleIcon sx={{ marginLeft: 0, marginRight: 0 }}/>} name="stopwatch" className="view-button" onClick={(e) => dispatch((updateView(e.target.name)))}></Button>
    )
}