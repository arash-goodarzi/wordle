import React, { useState, useEffect } from "react";
import APIService from "../services/APIService";
import Line from "./Line";
import { Button, ButtonGroup, Box } from "@mui/material";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RefreshIcon from "@mui/icons-material/Refresh";
import Keyboard from "./Keyboard";
import Logo from "../images/logo.png";

const Wordle = () => {
  const [solution, setSolution] = useState("");
  const [guesses, setGuesses] = useState(new Array(6).fill(null));
  const [current, setCurrent] = useState("");
  const [isFinished, setIsFinished] = useState(true);
  const [allWords, setAllWords] = useState([]);

  const handleStart = () => {
    if (isFinished) {
      alert("A new word is added");
      const s = allWords[Math.floor(Math.random() * allWords.length)];
      setSolution((prev) => (s === undefined ? "WORLD" : s.toUpperCase()));
      setGuesses(new Array(6).fill(null));
      setIsFinished(false);
    }
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
        setCurrent((prev) => prev + e.key.toUpperCase());
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
      <h1
        style={{
          fontFamily: "'Kavoon', cursive",
          fontSize: "2.5em",
        }}
      >
        Wordle
      </h1>
      <Box mb="38px">
        <img src={Logo} alt="logo" width={300} />
      </Box>
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
      <Keyboard />
      <ButtonGroup size="medium">
        <Button
          variant="contained"
          color="secondary"
          onClick={(e) => handleStart(e)}
        >
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
        <Button
          variant="contained"
          color="primary"
          onClick={() => window.location.reload(false)}
        >
          Refresh
          <RefreshIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Wordle;
