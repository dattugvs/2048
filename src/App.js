import React from 'react';
import Title from './Title';
import Game from './Game';
class App extends React.Component
{
	render() {
		return (
			<main>
				<div className="container">
					<Title />
					<Game/>
				</div>	
			</main>
		);
	}
}

export default App;
