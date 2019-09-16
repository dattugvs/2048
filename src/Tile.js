import React from 'react';

function Tile(props)
{
    var className="tile tile--"+props.number;
    return(
        <div>
            <div className={className} style={{"top":props.top, "left":props.left}}>
                <div className="tile-content">
                    {props.number}
                </div>
            </div>
        </div>
    )
}

export default Tile;