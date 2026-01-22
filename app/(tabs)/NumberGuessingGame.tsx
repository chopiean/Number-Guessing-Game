import { useEffect, useState } from "react";

function getRandom1to100() {
  return Math.floor(Math.random() * 100) + 1;
}

export default function NumberGuessingGame() {
  const [secret, setSecret] = useState(0);
  const [guessText, setGuessText] = useState("");
  const [message, setMessage] = useState("Guess a number between 1 and 100");
  const [guessCount, setGuessCount] = useState(0);

  useEffect(() => {
    setSecret(getRandom1to100);
  });

  function resetGame() {
    setSecret(getRandom1to100);
    setGuessText("");
    setGuessCount(0);
    setMessage("Guess a number between 1-100");
  }

  function handleMakeGuess() {
    const guess = parseInt(guessText, 10);
  }
}
