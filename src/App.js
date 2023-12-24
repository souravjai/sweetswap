import Board from "./components/Board"
import { useSelector } from 'react-redux'
import { useState } from "react"

function App() {
  const score = useSelector(state => state.sweetSwap.score);
  return (
    <div className="App">
      <header>
        <h1>Sweet Swap!</h1>
        <div className="score">Score: {score}</div>
      </header>
      <div className="game-arena">
        <Board />
      </div>
    </div>

  );
}

export default App;
