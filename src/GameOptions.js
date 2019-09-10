import React from 'react';

class GameOptions extends React.Component
{
    render()
    {
        return(
            <div className="game-options text-center">
                <button className="game-btn" onClick={()=>alert("new game")}>New Game</button>
                <button className="game-btn" onClick={()=>alert("undo")}>Undo</button>
            </div>
        )
    }
}

export default GameOptions;