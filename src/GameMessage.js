import React, { Component } from 'react';

class GameMessage extends Component {
    render() {
        return (
            <div class="game-message">
                {this.props.isWon === true ?
                    "won"
                 : 
                    "loose"
                }
            </div>
        );
    }
}

export default GameMessage;