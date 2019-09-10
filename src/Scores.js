import React, { Component } from 'react';
import ScoreCard from './ScoreCard';

class Scores extends Component {
    render() {
        return (
            <div className="scores">
                <ScoreCard score={this.props.score} scoreHeading="Score" />
                <ScoreCard score={this.props.best} scoreHeading="Best" />
            </div>
        );
    }
}

export default Scores;