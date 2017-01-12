//libraries
import React, { Component } from 'react';
//images
import logo from '../../img/logo/logo.png';
//styles
import bulbasaur from '../../img/game/bulbasaur.png';
import squirtle from '../../img/game/squirtle.png';
//images
import '../styles/App.css';
//components
import GameBoard from '../components/GameBoard';
//import CurrentScore from '../components/CurrentScore';


/*
* App
*/
export default class App extends Component {
  constructor() {
    super();

    //states
    this.state = {
      cards: [
        {
          id: 1,
          name: "bulbasaur",
          image: bulbasaur,
          open: false,
        },
        {
          id: 2,
          name: "bulbasaur",
          image: bulbasaur,
          open: false,
        },
        {
          id: 3,
          name: "squirtle",
          image: squirtle,
          open: false,
        },
        {
          id: 4,
          name: "squirtle",
          image: squirtle,
          open: false,
        }
      ],
      score: 0,
      click: 0,
      time: 0,
      compare: [],
      cleared: [],
    }

    //bind methods
    this.flipCard = this.flipCard.bind(this);
  }

  flipCard(index) {
    if(this.state.cards[index].open === false) {
      this.state.click += 1;
      this.state.cards[index].open = true;
      this.state.compare.push(this.state.cards[index]);
      if(this.state.compare.length === 2) {
        if(this.state.compare[0].name === this.state.compare[1].name) {
          this.state.score += 10;
          this.state.cleared.push(this.state.compare[0]);
        } else {
          this.state.score -= 2;
          this.state.compare[0].open = false;
          this.state.compare[1].open = false;
        }
        this.state.compare = [];
      }
      this.setState(this.state);
      //console.log(this.state);
    }
  }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Pokémon Memory</h2>
        </div>

        <GameBoard cards={this.state.cards} flipCard={this.state.flipCard} />

      </div>
    );
  }
}
