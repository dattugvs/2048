import React, { Component } from 'react';
import GameMessage from './GameMessage';
import Board from './Board';
import GameOptions from './GameOptions';
import Scores from './Scores';

var numbers = Array(16).fill(0);
class Game extends Component {
    render() {
        return (
            <div className="game">
                <Scores />
                <GameOptions />
                <Board numbers={numbers} />
            </div>
        );
    }
}

export default Game;