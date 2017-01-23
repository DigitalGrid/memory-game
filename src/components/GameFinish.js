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

export default GameFinish
