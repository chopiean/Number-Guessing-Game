import { useEffect, useState } from "react";
import { Alert } from "react-native";

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

    // Validate input
    if (Number.isNaN(guess)) {
      setMessage("Please enter a number 1-100");
      return;
    }
    if (guess < 1 || guess > 100) {
      setMessage("Your guess must be between 1-100");
      return;
    }

    //Count this attempt
    const newCount = guessCount + 1;
    setGuessCount(newCount);

    //Compare
    if (guess < secret) {
      setMessage(`Your guess ${guess} is too low`);
    } else if (guess > secret) {
      setMessage(`Your guess ${guess} is too high`);
    } else {
      Alert.alert(
        "Correct!",
        `You guessed the number in ${guessCount} guesses.`,
        [{ text: "OK", onPress: resetGame }]
      );
    }

    setGuessText("");
  }
}
