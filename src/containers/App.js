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
  }

  componentWillMount() {
    let cards = this.createCards(CARD_DECK);
    cards = this.shuffleCards(cards);

    this.setState({
      cards: cards
    })
  }

  /*
  * flip card
  */
  flipCard(index) {
    let click = this.state.click;
    let cards = this.state.cards;
    let compare = this.state.compare;
    let score = this.state.score;
    let cleared = this.state.cleared;

    if(cards[index].open === false) {
      click += 1;
      cards[index].open = true;
      compare.push(cards[index]);

      if(compare.length === 2) {
        if(compare[0].name === compare[1].name) {
          score += 10;
          cleared.push(compare[0]);
        } else {
          score -= 2;
          compare[0].open = false;
          compare[1].open = false;
        }
        compare = [];
      }

      this.setState({
        click: click,
        cards: cards,
        compare: compare,
        score: score,
        cleared: cleared
      });
    }
  }

  /*
  * Shuffle cards
  */
  shuffleCards(cardDeck) {
    let i, temp, position;
    for(i = cardDeck.length; i; i--) {
      position = Math.floor(Math.random() * i);
      temp = cardDeck[i-1];
      cardDeck[i-1] = cardDeck[position];
      cardDeck[position] = temp;
    }
    return cardDeck;
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
          open: false,
        }
        counter++;
      }
    }
    return arr;
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
