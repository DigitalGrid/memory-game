//libraries
import React, { PropTypes } from 'react';

import pokeball from '../../img/logo/logo.png';


// decides if game image should be faced up or down
const Card = props => {
	let classes = ["App-card"];

	if (props.open === true) {
		classes.push("cardFlipped");
	}

	return (
		<div className={classes.join(' ')} onClick={props.onFlip}>
			<img src={pokeball} />
			<img src={props.image} />
		</div>
	)
}

export default Card;
