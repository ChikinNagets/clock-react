import Button from '@mui/material/Button';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useDispatch } from 'react-redux';
import { updateView } from '../../reducers/TimerReducer';

export default function ClockButtonComponent () {

    const dispatch = useDispatch()

    return (
        <Button variant="outlined" startIcon={<AccessTimeIcon sx={{ marginLeft: 0, marginRight: 0 }}/>} name="clock" className="view-button" onClick={(e) => dispatch((updateView(e.target.name)))}></Button>
    )
}