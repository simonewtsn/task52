import React from 'react';
import Game from './Game';
import Help from './Help'
import './App.css';
//importing styles, react library and 2 components

function App() {
  return (
    <div className="App">
      <Game/>
      <Help/>
{/*rendering game and help components*/}
    </div>
  );
}
//exporting app to render in index.js
export default App;
