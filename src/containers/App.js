//libraries
import React, { Component } from 'react';
//images
import pokemonLogo from '../../img/logo/pokemon-logo.png'
//styles
import '../styles/App.css';
//components
import GameBoard from '../components/GameBoard';
import CurrentScore from '../components/CurrentScore';
import Card from '../components/Card';
import CARD_DECK from '../components/CardDeck';
import GameFinish from '../components/GameFinish';

const initialState = {
  cards: [],
  score: 0,
  clicks: 0,
  compare: [],
  cleared: [],
  locked: false,
  gameFinished: false,
}

/*
* App
*/
export default class App extends Component {
  constructor() {
    super();

    //states
    this.state = initialState;

    //bind methods
    this.flipCard = this.flipCard.bind(this);
    this.createCards = this.createCards.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.incClick = this.incClick.bind(this);
    this.compareCards = this.compareCards.bind(this);
    this.renderCards = this.renderCards.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  componentWillMount() {
    let cards = this.createCards(CARD_DECK);
    cards = this.shuffleCards(cards);
    this.setState({cards: cards});
  }

  /*
  * flip card
  */
  flipCard(index) {
    let cards = this.state.cards.slice();
    let compare = this.state.compare.slice();

    if(cards[index].open === false && this.state.locked === false) {
      this.incClick();
      cards[index].open = true;
      compare.push({id: cards[index].id, name: cards[index].name})

      this.setState({
        cards: cards,
        compare: compare
      });

      if(compare.length === 2) {
        this.compareCards(compare[0], compare[1]);
      }
    }
  }

  /*
  * update score
  */
  updateScore(delta) {
    let score = this.state.score;
    score += delta;
    this.setState({
      score: score,
    });
  }

  /*
  * increment click
  */
  incClick() {
    let clicks = this.state.clicks;
    clicks++;
    this.setState({
      clicks: clicks,
    });
  }

  /*
  * compare cards
  */
  compareCards(firstCard, secondCard) {
    let cleared = this.state.cleared.slice();
    let cards = this.state.cards.slice();
    let gameFinished = false;
    this.setState({locked: true});

    if(firstCard.name === secondCard.name) {
      cleared.push({id: firstCard.id, name: firstCard.name});
      if(cleared.length === cards.length/2) {
        gameFinished = true;
      }
      this.updateScore(10);
      this.setState({cleared: cleared, compare: [], locked: false, gameFinished: gameFinished});
    } else {
      setTimeout(() => {
        cards[firstCard.id].open = false;
        cards[secondCard.id].open = false;
        this.updateScore(-2);
        this.setState({cards: cards, compare: [], locked: false});
      }, 1000);
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
      cardDeck[i-1].id = i-1;
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

  /*
  * show endscore
  */
  showEndScore() {
    this.setState({
      gameFinished: true
    });
  }

  /*
  * hide endscore
  */
  hideEndScore() {
    this.setState({
      gameFinished: false
    });
  }

  /*
  * restart game
  */
  restartGame() {
    //reset state
    this.setState(initialState);
    //build cards
    let cards = this.createCards(CARD_DECK);
    cards = this.shuffleCards(cards);
    this.setState({cards: cards});
  }

  renderCards(cards) {
    return cards.map((card, index) => {
      return(
        <Card
          id={card.id}
          image={card.image}
          open={card.open}
          key={card.id}
          onFlip={this.flipCard}
        />
      )
    });
  }

  render() {
    const popup = (this.state.gameFinished ? <GameFinish score={this.state.score} clicks={this.state.clicks} restartGame={this.restartGame} /> : null);

    return (
      <div className="App">
        {popup}
        <div className="App-header">
          <img src={pokemonLogo} className="Pokemon-logo" alt="pokemon-logo" />
          <h2>Memory Game</h2>
        </div>

        <div className="App-main">
          <GameBoard>
            {this.renderCards(this.state.cards)}
          </GameBoard>

          <CurrentScore clicks={this.state.clicks} score={this.state.score} />
        </div>
      </div>
    );
  }
}
