//libraries
import React, { PropTypes } from 'react';

import pokeball from '../../img/logo/logo.png';

// export default class Card extends Component {
// 	render() {
// 		return (
// 			<div className="App-card">
// 				<img src={this.props.image} />
// 			</div>
// 		)
// 	}
// }

const Card = props => {
	let test = "";

	if (props.open === false) {
		test = pokeball;
	} else {
		test = props.image;
	}

	return (
		<div className="App-card">
			<img src={test} />
		</div>
	)
}

export default Card;
