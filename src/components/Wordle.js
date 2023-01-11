import React, { useState, useEffect } from "react";
import APIService from "../services/APIService";
import Line from "./Line";
import { Button } from "@material-ui/core";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";

const Wordle = () => {
  const [solution, setSolution] = useState("");
  const [guesses, setGuesses] = useState(new Array(6).fill(null));
  const [current, setCurrent] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const [allWords, setAllWords] = useState([]);

  const handleStart = () => {
    const s = allWords[Math.floor(Math.random() * allWords.length)];
    setSolution((pre) => s);
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

        guesses[guesses.findIndex((val) => val == null)] = current;
        setCurrent("");
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
      <div>
        <Button variant="contained" color="secondary" onClick={handleStart}>
          Contained
          <VideogameAssetIcon />
        </Button>
      </div>
    </div>
  );
};

export default Wordle;
