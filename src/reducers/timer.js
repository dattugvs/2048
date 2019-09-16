import { START_TIMER, STOP_TIMER, UPDATE_TIMER, NEW_GAME } from "../constants/action-types";

const intialState = {
    isTimerOn : false,
    timerStart: 0,
    timerTime: 0
}

export default function timer(state = intialState, action)
{
    switch (action.type) {
        case NEW_GAME : 
            {
                return {
                    isTimerOn : true,
                    timerStart: Date.now(),
                    timerTime : 0
                }
            }
        case START_TIMER:
            {
                return {
                    isTimerOn : true,
                    timerStart: Date.now(),
                    timerTime : 0
                }
            }
        case STOP_TIMER : 
            {
                return {
                    ...state,
                    isTimerOn : false
                }   
            }
        case UPDATE_TIMER : 
            {
                return {
                    ...state,
                    timerTime : Date.now() - state.timerStart
                }
            }
        default: return state;
    }
}