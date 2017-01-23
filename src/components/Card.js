//libraries
import React, { PropTypes } from 'react';

//images
import pokeball from '../../img/logo/logo.png';

const Card = props => {
	let classes = ["App-card"];

	if (props.open === true) {
		classes.push("cardFlipped");
	}

	return (
		<div className={classes.join(' ')} onClick={() => {props.onFlip(props.id)}}>
			<img className="pokeball" src={pokeball} />
			<img className="pokemon" src={props.image} />
		</div>
	)
}

Card.propTypes = {
	id: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
	onFlip: PropTypes.func.isRequired
};

export default Card;
