import React, { useState, useEffect } from "react";

const Game = () => {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (player1Score >= 5) {
      setGameOver(true);
      showAlert("Player 1 wins");
    } else if (player2Score >= 5) {
      setGameOver(true);
      showAlert("Player 2 wins");
    }
  }, [player1Score, player2Score]); // Dependency array

  const showAlert = (message) => {
    setTimeout(() => alert(message), 200);
  };

  const incrementScore = (player) => {
    if (player === "player1") {
      setPlayer1Score((prevScore) => prevScore + 1);
    } else if (player === "player2") {
      setPlayer2Score((prevScore) => prevScore + 1);
    }
  };

  return (
    <>
      <div>
        <label>Player 1 Score: {player1Score}</label>
        <button disabled={gameOver} onClick={() => incrementScore("player1")}>
          Player 1
        </button>
      </div>
      <br />
      <div>
        <label>Player 2 Score: {player2Score}</label>
        <button disabled={gameOver} onClick={() => incrementScore("player2")}>
          Player 2
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setPlayer1Score(0);
            setPlayer2Score(0);
            setGameOver(false);
          }}
        >
          Reset Game
        </button>
      </div>
    </>
  );
};

export default Game;
