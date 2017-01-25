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


 	it('removes point to the score when updateScore is called with a negative number', () => {
    component.instance().updateScore(-2);
    const after = component.state('score');
    expect(after).toEqual(-2);
  });

  /*
  * ------------------------
  * increment click
  * ------------------------
  */

  it('when incClick is called should increment clicks with one', () => {
  	component.instance().incClick();
  	const after = component.state('clicks');
  	expect(after).toEqual(1);
  });

  /*
  * ------------------------
  * compareCards
  * ------------------------
  */

  it('when first and second cards matches moves first card to cleared array', () => {
  	const firstCard = {id: 0, name: 'test'};
  	const secondCard = {id: 1, name: 'test'};

  	component.instance().compareCards(firstCard, secondCard);

  	const after = component.state('cleared');
  	expect(after.length).toEqual(1);
  	expect(after[0].id).toEqual(firstCard.id);
  	expect(component.state('gameFinished')).toEqual(false);
  	expect(component.state('compare').length).toEqual(0);
  });

  it('when first and second cards matches moves first card to cleared array and win', () => {
  	const firstCard = {id: 1, name: 'test'};
  	const secondCard = {id: 2, name: 'test'};
  	component.state('cleared').length = 11;

  	component.instance().compareCards(firstCard, secondCard);
  	const after = component.state('gameFinished');

 		expect(after).toEqual(true);
  });

  it('when first and second cards does not match switch back open to false', () => {
  	const firstCard = {id: 0, name: 'test'};
  	const secondCard = {id: 1, name: 'testar'};

  	component.instance().compareCards(firstCard, secondCard);

  	const firstCardAfter = component.state('cards')[firstCard.id].open;
  	const secondCardAfter = component.state('cards')[secondCard.id].open;

  	expect(firstCardAfter).toEqual(false);
  	expect(secondCardAfter).toEqual(false);
  	expect(component.state('compare').length).toEqual(0);
  });

  /*
  * ------------------------
  * createCards
  * ------------------------
  */

  it('create a pair of cards with unique id:s but same name', () => {
  	const cardDeck = [{name: 'test', image: 'test'}]
  	let arr;

  	arr = component.instance().createCards(cardDeck);

  	expect(arr[0].name).toEqual(arr[1].name);
  	expect(arr[0].id).not.toBe(arr[1].id);
  	expect(arr.length).toEqual(2);
  });

  /*
  * ------------------------
  * showEndScore
  * ------------------------
  */

  it('update gameFinished to true', () => {
  	const before = component.state('gameFinished');
  	component.instance().showEndScore();
  	const after = component.state('gameFinished');

  	expect(before).toEqual(false);
  	expect(after).toEqual(true);
  });

  /*
  * ------------------------
  * hideEndScore
  * ------------------------
  */

  it('update gameFinished to false', () => {
  	component.instance().showEndScore();
  	const firstCall = component.state('gameFinished');

  	component.instance().showEndScore();
  	const secondCall = component.state('gameFinished');


  	expect(firstCall).toEqual(true);
  	expect(secondCall).toEqual(true);
  });

  /*
  * ------------------------
  * restartGame
  * ------------------------
  */

  it('reset app state and setup game', () => {

		component.setState({
			cards: [{id:1, image:"1", open:true}, {id:2, image:"2", open:true}, {id:3, image:"3", open:true}, {id:4, image:"4", open:false}],
		  score: 100,
		  clicks: 200,
		  compare: [{id:3}],
		  cleared: [{id:1}],
		  locked: true,
		  gameFinished: true,
		})

		expect(component.state('cards').length).toEqual(4);
		expect(component.state('score')).toEqual(100);
		expect(component.state('clicks')).toEqual(200);
		expect(component.state('compare').length).toEqual(1);
		expect(component.state('cleared').length).toEqual(1);
		expect(component.state('locked')).toEqual(true);
		expect(component.state('gameFinished')).toEqual(true);

  	component.instance().restartGame();

  	expect(component.state('cards').length).toEqual(24);
		expect(component.state('score')).toEqual(0);
		expect(component.state('clicks')).toEqual(0);
		expect(component.state('compare').length).toEqual(0);
		expect(component.state('locked')).toEqual(false);
		expect(component.state('gameFinished')).toEqual(false);
		setTimeout(() => {
  		expect(component.state('cleared').length).toEqual(0);
		}, 10);

  });

  /*
  * ------------------------
  * flipCard
  * ------------------------
  */

  it('flip a card when open is set to false', () => {
  	component.instance().restartGame();
  	expect(component.state('cards')[0].open).toEqual(false);
  	component.instance().flipCard(0);
  	expect(component.state('cards')[0].open).toEqual(true);
  });

});
