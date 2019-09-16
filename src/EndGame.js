import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newGame } from './actions';

export class EndGame extends Component {
    render() {
        return (
            <div className="end active">
                <div className="game-message text-center">
                    {this.props.isWon === true ?
                        <div>
                            <p>Won the match ! <span role="img" aria-label="happy" style={{'fontSize':'100px'}}>🥳</span></p>
                            <button onClick={() => this.props.newGame()}>Try to win another Game</button>
                        </div>
                    :
                        <div>
                            <p>Lost the match ! <span role="img" aria-label="sad" style={{'fontSize':'100px'}}>🥺</span></p>
                            <button onClick={() => this.props.newGame()}>Retry Again</button>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        newGame      : () => dispatch(newGame())
    };
}

export default connect(null, mapDispatchToProps)(EndGame);