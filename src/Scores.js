import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Scores extends Component {
    render() {
        
        var bestScore = localStorage.getItem("best-score") || 0;
        if(bestScore === 0 || this.props.score > bestScore)
        {
            bestScore = this.props.score;
            localStorage.setItem("best-score", bestScore);
        }
        return (
            <div className="score-cotnainer">
                <div className="scores text-center">
                    <div className="scorecard" >
                        <p><strong>Score : </strong>{this.props.score}</p>
                    </div>
                    <div className="best-scorecard">
                        <p><strong>Best : </strong>{bestScore}</p>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) 
{
    return {
        score : state.game.gameInfo.score
    }
}

export default connect(mapStateToProps, null)(Scores);