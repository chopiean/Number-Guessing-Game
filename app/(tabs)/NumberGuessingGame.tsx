import { useState } from "react";

function getRandom1to100() {
  return Math.floor(Math.random() * 100) + 1;
}

export default function NumberGuessingGame() {
  const [secret, setSecret] = useState(0);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Guess a number between 1 and 100");
  const [guessCount, setGuesdCount] = useState(0);
}
