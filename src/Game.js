import React, { Component } from 'react';
import Board from './Board';
import GameOptions from './GameOptions';
import GameSteps from './GameSteps';
import Scores from './Scores';
import EndGame from './EndGame';
import { connect } from 'react-redux';

export class Game extends Component 
{
    render() {
        console.log("isGameOver - "+this.props.isGameOver);
        return (
            <div className="game" >
                <Scores />
                <GameOptions />
                <Board />
                <GameSteps moves={12} time={123}/>
                {
                    this.props.isGameOver === true ?
                        <EndGame />
                    :
                        null
                }
            </div>
        );
    }
}

function mapStateToProps(state) 
{
    return {
        isGameOver: state.game.gameStatus.isGameOver
    }
}

export default connect(mapStateToProps, null)(Game);