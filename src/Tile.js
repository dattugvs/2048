import React from 'react';

function Tile(props)
{
    return(
        <div className="background" style={{"top":props.top, "left":props.left}}>
            {props.number}
        </div>
    )
}

export default Tile;