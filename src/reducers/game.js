import { MOVE_UP, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT, NEW_GAME, UNDO_GAME, START_TIMER } from '../constants/action-types';
import { initGame } from '../Game/initGame';
import { makeMove } from '../Game/makeMove';
import { insertNewNumber } from '../Game/getRandomIndex';
import { isGameOver } from '../Game/isGameOver';
import { UP, Down, LEFT, RIGHT } from '../constants/directions';

function initialState() 
{
    return {
        gameInfo : {
            score : 0,
            moves : 0,
        },
        gameStatus : {
            isWon : false,
            isGameOver : false,
        },
        numbers : {
            current : initGame(),
            previous: null
        }
    }
}

export default function game(state = initialState(), action)
{

    switch(action.type)
    {
        case NEW_GAME     : return initialState();
        case START_TIMER  : return {
            ...state,
            isTimerOn : true
        }
        case UNDO_GAME    : return {
            ...state,
            numbers : {
                current : state.numbers.previous,
                previous : null
            }
        };
        case MOVE_UP   : return updateMove(state, UP);
        case MOVE_DOWN : return updateMove(state, Down);
        case MOVE_LEFT : return updateMove(state, LEFT);
        case MOVE_RIGHT: return updateMove(state, RIGHT);
        default : return state;
    }
}

function updateMove(state, direction)
{
    //console.log(state);
    //console.log(direction);

    var currentNumbers =  clone2dArray(state.numbers.current);
    var currMove = makeMove(currentNumbers, direction);

    var movedNumbers = currMove.nums;
    var currScore = currMove.totalScore;

    // console.log(state.gameInfo.score+" "+moves);

    var gameStatus = isGameOver(movedNumbers);
    var isTimerOn = gameStatus.isGameOver;
    if(gameStatus.isGameOver === false)
    {
        movedNumbers = insertNewNumber(movedNumbers);
    }

    return {
        ...state,
        gameInfo : {
            score : state.gameInfo.score + currScore,
            moves : state.gameInfo.moves + (currScore === 0 ? 0 : 1),
        },
        numbers : {
            current : movedNumbers,
            previous : state.numbers.current
        },
        gameStatus : gameStatus,
        isTimerOn  : isTimerOn
    }
}

function clone2dArray(arr)
{
    return arr.map((a) => {return a.slice()})
}