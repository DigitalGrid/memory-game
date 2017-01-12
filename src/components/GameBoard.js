//libraries
import React, { Component } from 'react';

//components
import Card from '../components/Card';

export default class GameBoard extends Component {
	render() {
		return (
			<div className="App-gameBoard">
				<div className="App-cards">
					{this.props.cards.map(function(card, index) {
						return(
							<Card
								image={card.image}
								open={card.open}
								key={index}
								onFlip={() => this.props.flipCard(index)}
							/>
						)
					})}
				</div>
			</div>
		)
	}
}
