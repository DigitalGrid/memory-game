//libraries
import React, { PropTypes } from 'react';

const CurrentScore = props => {

	return (
		<div className="App-score">
			<h2>Score</h2>
			<ul>
				<li>Score {props.score}</li>
				<li>Clicks {props.clicks}</li>
			</ul>
		</div>
	)
}

CurrentScore.propTypes = {
	score: PropTypes.number.isRequired,
	clicks: PropTypes.number.isRequired,
};

export default CurrentScore;
