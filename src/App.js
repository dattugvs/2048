import React from 'react';
import Title from './Title';
import Game from './Game';
import Instructions from './Instructions';
import Scores from './Scores';
import Board from './Board';

class App extends React.Component
{
	render() {
		return (
			<div>
				<div className = "container-fluid">
					<Title />
					<Instructions />
				</div>
				<div className="container">
					<Game />
				</div>
				
			</div>
		);
	}
}

export default App;
