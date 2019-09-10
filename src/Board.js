import React from 'react';
import Tile from './Tile';

class Board extends React.Component
{
    render()
    {
        return(
           <div className="board">
               <div className="tile-container">
                    <div className="tile-row">
                        <Tile number={this.props.numbers[0]} top={"0px"} left={"0px"}  />
                        <Tile number={this.props.numbers[1]} top={"0px"} left={"100px"}  />
                        <Tile number={this.props.numbers[2]} top={"0px"} left={"200px"}  />
                        <Tile number={this.props.numbers[3]} top={"0px"} left={"300px"}  />
                    </div>
                    <div className="tile-row">
                        <Tile number={this.props.numbers[4]} top={"100px"} left={"0px"}  />
                        <Tile number={this.props.numbers[5]} top={"100px"} left={"100px"}  />
                        <Tile number={this.props.numbers[6]} top={"100px"} left={"200px"}  />
                        <Tile number={this.props.numbers[7]} top={"100px"} left={"300px"}  />
                    </div>
                    <div className="tile-row">
                        <Tile number={this.props.numbers[8]} top={"200px"} left={"0px"}  />
                        <Tile number={this.props.numbers[9]} top={"200px"} left={"100px"}  />
                        <Tile number={this.props.numbers[10]} top={"200px"} left={"200px"}  />
                        <Tile number={this.props.numbers[11]} top={"200px"} left={"300px"}  />
                    </div>
                    <div className="tile-row">
                        <Tile number={this.props.numbers[12]} top={"300px"} left={"0px"}  />
                        <Tile number={this.props.numbers[13]} top={"300px"} left={"100px"}  />
                        <Tile number={this.props.numbers[14]} top={"300px"} left={"200px"}  />
                        <Tile number={this.props.numbers[15]} top={"300px"} left={"300px"}  />
                    </div>
                </div>
           </div>
        )
    }
}

export default Board;