import React from 'react';
import { connect } from 'react-redux';
import { newGame, undoGame } from './actions';

export class GameOptions extends React.Component
{
    render()
    {
        return(
            <div className="game-options">
                <button className="game-btn new-game-btn" style={{"float":"left"}} onClick={()=>this.props.newGame()}>New Game</button>
                <button className= "game-btn undo-game-btn" 
                    style={{"float":"right"}} 
                    onClick={()=>this.props.undoGame()}
                    disabled={this.props.isPreviousNull}
                >
                    Undo
                </button>
            </div>
        );
    }
}

function mapStateToProps(state)
{
    return {
        isPreviousNull : state.game.numbers.previous === null ? true : false
    }
}

function mapDispatchToProps(dispatch) {
    return {
        newGame      : () => dispatch(newGame()),
        undoGame     : () => dispatch(undoGame()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameOptions);