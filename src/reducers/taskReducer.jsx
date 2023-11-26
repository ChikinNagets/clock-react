import { connect } from "react-redux";
import TimerComponent from "../components/TimerComponent/TimerInputComponent";
import TimerInputComponent from "../components/TimerComponent/TimerInputComponent"

const initialState = {
    tasks: []
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TIMER_VALUE':
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
        };
      case 'CHANGE_VIEW':
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
        };
      default:
        return state;
    }
  };

  const mapStateToProps = state => {
    return {
      tasks: state
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      SET_TIMER_VALUE: () => dispatch({type: 'SET_TIMER_VALUE'}),
      CHANGE_VIEW: () => dispatch({type: 'CHANGE_VIEW'})
    }
  }

  const Container = () => {
    connect(mapStateToProps,mapDispatchToProps)(TimerComponent, TimerInputComponent)
  }
  
  export default taskReducer;