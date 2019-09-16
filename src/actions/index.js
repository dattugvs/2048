import { NEW_GAME, UNDO_GAME, MOVE_LEFT, MOVE_DOWN, MOVE_UP, MOVE_RIGHT, START_TIMER, STOP_TIMER, UPDATE_TIMER } from "../constants/action-types";

export function newGame() {
    return {
        type : NEW_GAME
    }
}

export function startTimer() {
    return {
        type : START_TIMER
    }
}

export function stopTimer() {
    return {
        type : STOP_TIMER
    }
}

export function updateTimer() {
    return {
        type : UPDATE_TIMER
    }
}

export function undoGame() {
    return {
        type : UNDO_GAME
    }
}

export function moveLeft() {
    return {
        type : MOVE_LEFT
    }
}

export function moveRight() {
    return {
        type : MOVE_RIGHT
    }
}

export function moveUp() {
    return {
        type : MOVE_UP
    }
}

export function moveDown() {
    return {
        type : MOVE_DOWN
    }
}