//libraries
import React, { PropTypes } from 'react';

/*
* GameFinish
*/
const GameFinish = props => {
  return (
    <div className="Game-finish">
      <p>score: {props.score}</p>
      <p>clicks: {props.clicks}</p>
      <button onClick={props.restartGame}>Restart</button>
    </div>
  );
}

GameFinish.propTypes = {
	score: PropTypes.number.isRequired,
	clicks: PropTypes.number.isRequired,
	restartGame: PropTypes.func.isRequired,
};

export default GameFinish
