import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startTimer, stopTimer, updateTimer } from './actions';

export class Timer extends Component {

    startTimer()
    {
        this.props.startTimer(); // change status in store
        this.timer = setInterval(this.updateTimer.bind(this), 1000);
    }

    updateTimer()
    {
        if(this.props.isGameOver === true)
        {
            this.props.stopTimer();
        }
        else
        {
            this.props.updateTimer();
        }
    }

    stopTimer()
    {
        this.props.stopTimer();
    }
    
    render() {
        if(this.props.isTimerOn === false && this.props.isGameOver === false)
        {
            this.startTimer();
        }
        
        const {hour, minute, seconds} = this.convertMS(this.props.timerTime);
        return (
            <div className="timer">
                <p>
                    <strong>Time - </strong>
                    {hour + " : " + minute + " : " + seconds}
                </p>
            </div>
        );
    }

    
    convertMS( milliseconds ) 
    {
        var hour, minute, seconds;
        seconds = Math.floor(milliseconds / 1000);
        minute = Math.floor(seconds / 60);
        seconds = seconds % 60;
        hour = Math.floor(minute / 60);
        minute = minute % 60;
        hour = hour % 24;
        return {
            hour: (hour+"").padStart(2, '0'),
            minute: (minute+"").padStart(2, '0'),
            seconds: (seconds+"").padStart(2, '0')
        };
    }
}

function mapStateToProps(state)
{
    return {
        isTimerOn :  state.timer.isTimerOn,
        isGameOver : state.game.gameStatus.isGameOver,
        timerTime :  state.timer.timerTime
    }
}

function mapDispatchToProps(dispatch)
{
    return {
        startTimer : () => dispatch(startTimer()),
        updateTimer: () => dispatch(updateTimer()),
        stopTimer  : () => dispatch(stopTimer())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);