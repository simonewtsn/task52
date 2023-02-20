import React from "react";
import { useState } from 'react';
import '../css/Game.css'
//importing styles and react library, also usestate hook from react

//creating help component
const Help = () => {
//set showinfo state to false
  const [showInfo, setShowInfo] = useState(false);
//create toggle switching between true and false, showing help or not
  const toggleInfo = () => setShowInfo(!showInfo);

  return (
    <div>
{/*creating a button that calls toggleinfo when clicked*/}
      <button id="help-btn" onClick={toggleInfo}>Help</button>
      {showInfo && (
        <div className="help">
          <p>Guess the country hangman game rules:</p>
          <p>
          The game will begin with choosing a letter attempting to guess the country.
          You start with 6 lives. For every incorrect guess, one life will be taken away.
          If you runs out of lives before guessing the word, you lose. If you fill in the all missing letters and guess the word correctly, you win. 
          Have fun!
          </p>
        </div>
      )}
    </div>
  );
};
//it displays this paragraph of info if clicked
//export this component
export default Help;