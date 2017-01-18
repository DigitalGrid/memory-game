//libraries
import React, { Component } from 'react';
//images
import logo from '../../img/logo/logo.png';
//styles
import '../styles/App.css';
//components
import GameBoard from '../components/GameBoard';
import Card from '../components/Card';
import CARD_DECK from '../components/CardDeck';
//import CurrentScore from '../components/CurrentScore';

/*
* App
*/
export default class App extends Component {
  constructor() {
    super();

    //states
    this.state = {
      cards: [],
      score: 0,
      click: 0,
      time: 0,
      compare: [],
      cleared: [],
    }

    //bind methods
    this.flipCard = this.flipCard.bind(this);
    this.createCards = this.createCards.bind(this);

    this.createCards(CARD_DECK);
    this.shuffleCards();
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
    }
  }

  /*
  * Shuffle cards
  */
  shuffleCards() {
    let i, temp, position;
    let cardDeck = this.state.cards.slice();
    for(i = cardDeck.length; i; i--) {
      position = Math.floor(Math.random() * i);
      temp = cardDeck[i-1];
      cardDeck[i-1] = cardDeck[position];
      cardDeck[position] = temp;
    }
    this.state.cards = cardDeck;
    //this.setState({
      //cards: cardDeck
    //})
  }

  /*
  * Create cards
  */
  createCards(cardDeck) {
    let counter = 0;
    let arr = [];

    for(let i = 0; i < cardDeck.length; i++) {
      for(let j = 0; j < 2; j++) {
        arr[counter] = {
          id: counter,
          image: cardDeck[i].image,
          name: cardDeck[i].name,
          open: true,
        }
        counter++;
      }
    }
    this.state.cards = arr;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Pokémon Memory</h2>
        </div>

        <GameBoard>
          {this.state.cards.map((card, index) => {
            return(
              <Card
                image={card.image}
                open={card.open}
                key={index}
                onFlip={() => this.flipCard(index)}
              />
            )
          })}
        </GameBoard>

      </div>
    );
  }
}
