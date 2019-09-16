import React from 'react';
import Tile from './Tile';
import {connect} from 'react-redux';
import { moveUp, moveDown, moveLeft, moveRight } from './actions';

export class Board extends React.Component
{
    constructor(props)
    {
        super(props);
        this.board = React.createRef();

    }
    componentDidMount() {
        this.focusGame();
    }

    componentDidUpdate(prevProps, prevState) {
        this.focusGame();
    }

    focusGame()
    {
        this.board.current.focus();
    }

    render()
    {
        //console.log("rendering board ---");
        //console.log(this.props.numbers);
        //console.log(this.props.previous);
        return(
           <div className="board"
                onKeyDown={this.handleKeyPress.bind(this)}
                tabIndex="0"
                ref={this.board}
                onBlur={()=> {this.focusGame()}}
           >
               <div className="tile-container">
                    <div className="tile-row">
                        <Tile number={this.props.numbers[0][0]} top={"0px"} left={"0px"}  />
                        <Tile number={this.props.numbers[0][1]} top={"0px"} left={"100px"}  />
                        <Tile number={this.props.numbers[0][2]} top={"0px"} left={"200px"}  />
                        <Tile number={this.props.numbers[0][3]} top={"0px"} left={"300px"}  />
                    </div>
                    <div className="tile-row">
                        <Tile number={this.props.numbers[1][0]} top={"100px"} left={"0px"}  />
                        <Tile number={this.props.numbers[1][1]} top={"100px"} left={"100px"}  />
                        <Tile number={this.props.numbers[1][2]} top={"100px"} left={"200px"}  />
                        <Tile number={this.props.numbers[1][3]} top={"100px"} left={"300px"}  />
                    </div>
                    <div className="tile-row">
                        <Tile number={this.props.numbers[2][0]} top={"200px"} left={"0px"}  />
                        <Tile number={this.props.numbers[2][1]} top={"200px"} left={"100px"}  />
                        <Tile number={this.props.numbers[2][2]} top={"200px"} left={"200px"}  />
                        <Tile number={this.props.numbers[2][3]} top={"200px"} left={"300px"}  />
                    </div>
                    <div className="tile-row">
                        <Tile number={this.props.numbers[3][0]} top={"300px"} left={"0px"}  />
                        <Tile number={this.props.numbers[3][1]} top={"300px"} left={"100px"}  />
                        <Tile number={this.props.numbers[3][2]} top={"300px"} left={"200px"}  />
                        <Tile number={this.props.numbers[3][3]} top={"300px"} left={"300px"}  />
                    </div>
                </div>
           </div>
        )
    }

    handleKeyPress(e)
    {
        e.preventDefault();
        switch (e.keyCode) 
        {
            case 37:
                this.props.moveLeft();
                break;
            case 38:
                this.props.moveUp();
                break;
            case 39:
                this.props.moveRight();
                break;
            case 40:
                this.props.moveDown();
                break;
            default  : break;
        }
    }
}

function mapStateToProps(state) 
{
    return {
        previous : state.game.numbers.previous,
        numbers: state.game.numbers.current
    }
}

function mapDispatchToProps(dispatch) {
    return {
        moveUp      : () => dispatch(moveUp()),
        moveDown    : () => dispatch(moveDown()),
        moveLeft    : () => dispatch(moveLeft()),
        moveRight   : () => dispatch(moveRight())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);