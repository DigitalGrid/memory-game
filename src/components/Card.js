//libraries
import React, { PropTypes } from 'react';

import pokeball from '../../img/logo/logo.png';

const Card = props => {
	let classes = ["App-card"];

	if (props.open === true) {
		classes.push("cardFlipped");
	}

	return (
		<div className={classes.join(' ')} onClick={props.onFlip}>
			<img className="pokeball" src={pokeball} />
			<img className="pokemon" src={props.image} />
		</div>
	)
}

export default Card;
