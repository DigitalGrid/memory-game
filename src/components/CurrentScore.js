//libraries
import React, { PropTypes } from 'react';

const CurrentScore = props => {

	return (
		<div className="App-score">
			<h2>Score</h2>
			<ul>
				<li>Clicks {props.clicks}</li>
				<li>Score {props.score}</li>
			</ul>
		</div>
	)
}

export default CurrentScore;
