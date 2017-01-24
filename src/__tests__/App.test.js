//libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

//components
import App from '../containers/App';
import GameBoard from '../components/GameBoard';
import CurrentScore from '../components/CurrentScore';
import Card from '../components/Card';

describe(App, () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  /*
  * ========================
  * rendering
  * ========================
  */

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('contains a GameBoard subcomponent', () => {
    expect(component.find(GameBoard)).toHaveLength(1);
  });

  it('contains a CurrentScore subcomponent', () => {
    expect(component.find(CurrentScore)).toHaveLength(1);
  });

  it('contains the same number of Card components as cards', () => {
    const cardComponents = component.find(Card).length;
    const cards = component.state('cards').length;
    expect(cardComponents).toEqual(cards);
  });

  /*
  * ========================
  * methods and states
  * ========================
  */

  /*
  * ------------------------
  * updateScore
  * ------------------------
  */

  it('adds point to the score when updateScore is called with a positive number', () => {
    component.instance().updateScore(10);
    const after = component.state('score');
    expect(after).toEqual(10);
  });

  it('subtract point to the score when updateScore is called with a negative number', () => {
    component.instance().updateScore(-2);
    const after = component.state('score');
    expect(after).toEqual(-2);
  });

  /*
  * ------------------------
  * incClick
  * ------------------------
  */

  it('increment clicks by 1 when incClick is called', () => {
    component.instance().incClick();
    const after = component.state('clicks');
    expect(after).toEqual(1);
  });

  /*
  * ------------------------
  * compareCards
  * ------------------------
  */



});
