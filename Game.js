import React, { Component } from "react";
import { randomWord } from "./Words";
import "./Game.css";
import start from "./images/start.jpg";
import chance1 from "./images/chance1.jpg";
import chance2 from "./images/chance2.jpg";
import chance3 from "./images/chance3.jpg";
import chance4 from "./images/chance4.jpg";
import chance5 from "./images/chance5.jpg";
import chance6 from "./images/chance6.jpg";
//importing react and component property,
//importing randomword function, and styles
//importing images from images folder

//declaring game class that extends component class
class Game extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: [start, chance1, chance2, chance3, chance4, chance5, chance6],
  };
//defines defaultprops, setting the max wrong guesses to 6 and images to the imported images 

  constructor(props) {
    super(props);
    this.state = {
      noOfWrong: 0,
      guessed: new Set(),
      answer: randomWord(),
    };
    this.handleGuess = this.handleGuess.bind(this);
    this.reset = this.reset.bind(this);
  }
//set initial state of number wrong to 0, guesses and answer properties and binding the handle guess and reset methods to game class

  reset() {
    this.setState({
      noOfWrong: 0,
      guessed: new Set(),
      answer: randomWord(),
    });
  }
//defining reset method, reseting properties to their initial values
  guessedWord() {
    return this.state.answer
      .split("")
      .map((letter) => (this.state.guessed.has(letter) ? letter : "_"));
  }
// defining guessed word method, that returns the correct guessed answer and display number of missing letters (_) that havent been guessed

  handleGuess(evt) {
    let letter = evt.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(letter),
      noOfWrong: st.noOfWrong + (st.answer.includes(letter) ? 0 : 1),
    }));
  }
//defines handle guess method, this adds the letter to guessed set and adds to the noofwrong property if the letter is not included in answer

  generateKeypad() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
      <button
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }
//defines generate keypad method which returns a button for each etter of alphabet, but makes sure you cant click if that letter has been already used

  render() {
    const gameOver = this.state.noOfWrong >= this.props.maxWrong;
//render method called each time state changes
    const isWinner = this.guessedWord().join("") === this.state.answer;
//setting boolean to check if user has guessed correctly or exceed max guesses
    let gameState = this.generateKeypad();
    if (isWinner) gameState = "YOU WIN!";
    if (gameOver) gameState = "YOU LOSE!";
    let restart = gameOver || isWinner;
//sets reset boolean to true if user has lost or won
    return (
      <div className="Game">
        <h2>Hangman</h2>
{/*title, and created image element assigns source from props image array at index of no of wrong state*/}
        <img src={this.props.images[this.state.noOfWrong]} alt="HangMan" />
        <p>
          Guessed Left: {this.props.maxWrong - this.state.noOfWrong} /{" "}
          {this.props.maxWrong}
        </p>
        <p>Guess the Programming Language</p>
        <p className="guess-word">
          {!gameOver ? this.guessedWord() : this.state.answer}
        </p>
{/*adds either guessedword or this state answer based on boolean value of game over*/}
        <p className="game-btns">{gameState}</p>
        {restart && (
          <button id="reset" onClick={this.reset}>
            Restart?
          </button>
)}
{/*creates button that when clicked resets the game*/}
      </div>
    );
  }
}
//exporting game component to be used later
export default Game;
