import React, { Component } from 'react';

class Instructions extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center">
                <p>
                    <strong>
                        HOW TO PLAY:
                    </strong> 
                    Use your arrow keys to move the tiles. When two tiles slide into each other, they merge into one!
                </p>
            </div>
        );
    }
}

export default Instructions;