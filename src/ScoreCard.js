import React, { Component } from 'react';

class ScoreCard extends Component {
    render() {
        return (
            <div className="score-container">
                <p className="score-heading">
                    {this.props.scoreHeading}
                </p>
                {this.props.score}
            </div>
        );
    }
}

export default ScoreCard;