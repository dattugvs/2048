import { combineReducers } from 'redux'
import game from './game'
import timer from './timer';

export const rootReducer = combineReducers({
    game : game,
    timer : timer
});
