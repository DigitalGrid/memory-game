//libraries
import React, { Component } from 'react';

export default class GameBoard extends Component {
	render() {
		return (
			<div className="App-gameBoard">
				<div className="App-cards">
					{this.props.children}
				</div>
			</div>
		)
	}
}
