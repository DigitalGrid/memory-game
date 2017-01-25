//libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

//components
import GameFinish from '../components/GameFinish';

describe(GameFinish, () => {
  let component;
  const mockOnRestart = jest.fn();

  /*
  * ========================
  * rendering
  * ========================
  */

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GameFinish score={100} clicks={3} restartGame={mockOnRestart} />, div);
  });

  /*
  * ========================
  * methods and states
  * ========================
  */

  it('calls the passed in onFlip function when card (div) is clicked', () => {
    component = shallow(<GameFinish score={100} clicks={3} restartGame={mockOnRestart} />);
    component.find('div.Game-finish button').simulate('click');
    expect(mockOnRestart).toBeCalled();
  });

});
