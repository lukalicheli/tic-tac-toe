import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  //map over the array of tiles to render a card component for each tiles


  //Winning combinations for winning a game
  function gameWon() {}

  //Combination if game is tied
  function gameTie() {}

  //state for whos turn it is x or o

  //conditional that if index[i] has value other than null, it cannot be changed

  //onClick function on the indexes where it changes the value to the current
  // state of whos turn it is

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
    </div>
  );
}

export default App;
