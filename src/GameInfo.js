import React, { Component } from 'react';
import Scores from './Scores';
import GameOptions from './GameOptions';

class GameInfo extends Component {
    render() {
        return (
            <div className="game-info">
                <Scores score={0} best={0} />
				<GameOptions />                
            </div>
        );
    }
}

export default GameInfo;