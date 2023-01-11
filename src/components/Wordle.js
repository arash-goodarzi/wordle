import React, { useState, useEffect } from "react";
import APIService from "../services/APIService";
import Line from "./Line";
import { Box, Button, ButtonGroup } from "@material-ui/core";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Wordle = () => {
  const [solution, setSolution] = useState("");
  const [guesses, setGuesses] = useState(new Array(6).fill(null));
  const [current, setCurrent] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const [allWords, setAllWords] = useState([]);

  console.log({ solution });

  const handleStart = () => {
    const s = allWords[Math.floor(Math.random() * allWords.length)];
    setSolution((prev) => (s === undefined ? "world" : s));
    setGuesses(new Array(6).fill(null));
    setIsFinished(false);
  };

  useEffect(() => {
    const api = new APIService();
    api
      .get("")
      .then((data) => data.filter((x) => x.length === 5))
      .then((data) => setAllWords(data));
  }, []);

  useEffect(() => {
    const handleType = (e) => {
      if (isFinished) {
        return;
      }

      if (e.key === "Backspace") {
        setCurrent((prev) => [...prev].slice(0, -1));
        return;
      }

      if (e.key === "Enter") {
        if (current.length < 5) {
          return;
        }

        if (current.length > 5) {
          return;
        }

        if (current === solution) {
          alert("You won!");
          setIsFinished(true);
        }

        console.log({ current });
        console.log({ guesses });
        guesses[guesses.findIndex((val) => val == null)] = current;
        console.log({ guesses });
        setCurrent("");
        console.log({ current });
        return;
      }

      if (e.key.match(/[A-Za-z]/)) {
        setCurrent((prev) => prev + e.key);
        return;
      }
    };

    window.addEventListener("keydown", handleType);

    return () => {
      window.removeEventListener("keydown", handleType);
    };
  }, [current, solution, isFinished, guesses]);

  return (
    <div className="board">
      <h1 style={{ fontFamily: "game", fontSize: "2.5em" }}>Wordle</h1>
      {guesses.map((guess, i) => {
        const isCurrentGuess = i === guesses.findIndex((val) => val === null);
        return (
          <Line
            key={i}
            guess={isCurrentGuess ? current : guess ?? ""}
            isFinall={!isCurrentGuess && guess != null}
            solution={solution}
          />
        );
      })}
      <ButtonGroup>
        <Button variant="contained" color="secondary" onClick={handleStart}>
          Start
          <VideogameAssetIcon />
        </Button>
        <Button
          variant="contained"
          color="inherit"
          onClick={() => alert(`The solution is "${solution}"`)}
        >
          <VisibilityIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Wordle;
