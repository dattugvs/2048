import React, { Component } from 'react';
import Timer from './Timer';
import { connect } from 'react-redux';

export class GameSteps extends Component {
    render() {
        return (
            <div className="game-steps">
                <div className="steps">
                    <p>
                        <strong>Moves : </strong>
                        {this.props.moves}
                    </p>
                </div>
                <Timer />
            </div>
        );
    }
}

function mapStateToProps(state)
{
    return {
        moves : state.game.gameInfo.moves
    }
}

export default connect(mapStateToProps, null)(GameSteps);