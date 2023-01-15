import React, { useState, useEffect } from "react";
import APIService from "../services/APIService";
import Line from "./Line";
import {
  Button,
  ButtonGroup,
  Box,
  Typography,
  Dialog,
  Alert,
  AlertTitle,
  IconButton,
  List,
  ListItem,
} from "@mui/material";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RefreshIcon from "@mui/icons-material/Refresh";
import Keyboard from "./Keyboard";
import { motion } from "framer-motion";

// Icons
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import InfoIcon from "@mui/icons-material/Info";
import SportsScoreIcon from "@mui/icons-material/SportsScore";

const Wordle = () => {
  const [solution, setSolution] = useState("");
  const [guesses, setGuesses] = useState(new Array(6).fill(null));
  const [current, setCurrent] = useState("");
  const [isFinished, setIsFinished] = useState(true);
  const [allWords, setAllWords] = useState([]);

  const [openAlertNewWord, setOpenAlertNewWord] = useState(false);
  const [showSoulution, setShowSoulution] = useState(false);
  const [showWon, setShowWon] = useState(false);
  const [instruction, setInstruction] = useState(false);

  const [backgroundPage, setBackgroundPage] = useState("white");

  const wonMessage = [
    "Bravo!!!",
    "Congratulations!!!",
    "Well done!",
    "It was hard but you made it.",
    "Victory is in having done your best. If you've done your best, you've won.",
    "It's not whether you get knocked down. It's whether you get back up.",
    "It’s not about perfect. It’s about effort.",
    "You were born to be a player. You were meant to be here. This moment is yours.",
    "You did it! So proud of you!",
    "Congratulations on your well-deserved success.",
    "Heartfelt congratulations to you.",
    "Warmest congratulations on your achievement.",
    "Congratulations and best wishes for your next adventure!",
    "So pleased to see you accomplishing great things.",
    "Victory is always possible for the person who refuses to stop fighting.",
    "Victory belongs to the most persevering.",
    "Invincibility lies in the defence; the possibility of victory in the attack.",
    "Far better is it to dare mighty things, to win glorious triumphs, even though checkered by failure... than to rank with those poor spirits who neither enjoy nor suffer much, because they live in a gray twilight that knows not victory nor defeat.",
    "The first and greatest victory is to conquer yourself; to be conquered by yourself is of all things most shameful and vile.",
    "Accept the challenges so that you can feel the exhilaration of victory.",
    "Your victory is right around the corner. Never give up.",
    "Failure is only postponed success as long as courage 'coaches' ambition. The habit of persistence is the habit of victory.",
    "In the time of darkest defeat, victory may be nearest.",
  ];

  const slogan = [
    { id: 1, char: "W", color: "salmon" },
    { id: 2, char: "O", color: "orange" },
    { id: 3, char: "R", color: "khaki" },
    { id: 4, char: "D", color: "cyan" },
    { id: 5, char: "L", color: "mediumseagreen" },
    { id: 6, char: "E", color: "violet" },
  ];

  const handleCloseAlertNewWord = () => {
    setOpenAlertNewWord(!openAlertNewWord);
  };

  const handleCloseAlertShowSolution = () => {
    setShowSoulution(!showSoulution);
  };

  const handleCloseAlertShowWon = () => {
    setShowWon(!showWon);
  };

  const handleCloseAlertInstruction = () => {
    setInstruction(!instruction);
  };

  const handleStart = () => {
    if (isFinished) {
      setOpenAlertNewWord(() => true);
      const s = allWords[Math.floor(Math.random() * allWords.length)];
      setSolution((prev) => (s === undefined ? "WORLD" : s.toUpperCase()));
      setGuesses(new Array(6).fill(null));
      setIsFinished(false);
    }
  };

  const handleBackgroundColor = (backgroundColor) => {
    setBackgroundPage(() => backgroundColor);
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

      if (e.key === "Control" || e.key === "Alt") {
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
          setShowWon(true);
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
    <Box className="board" bgcolor={backgroundPage}>
      <Box display="flex">
        <Box>
          <Typography
            variant="h1"
            style={{
              fontFamily: "'Kavoon', cursive",
              fontSize: "2.5em",
            }}
          >
            Wordle
          </Typography>
        </Box>
        <Box display="flex" justifyContent="end">
          <IconButton onClick={() => setInstruction(true)}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 50,
              }}
            >
              <InfoIcon color="secondary" />
            </motion.div>
          </IconButton>
        </Box>
      </Box>
      <Box display="flex">
        {slogan.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              bgcolor: item.color,
              borderRadius: "50%",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontFamily: "serif",
              width: {
                xs: "40px",
                sm: "45px",
                md: "50px",
                lg: "55px",
                xl: "60px",
              },
              height: {
                xs: "40px",
                sm: "45px",
                md: "50px",
                lg: "55px",
                xl: "60px",
              },
              fontSize: "1.5rem",
              cursor: "pointer",
              border: "1px solid black",
            }}
            onClick={() => handleBackgroundColor(item.color)}
          >
            {item.char}
          </Box>
        ))}
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
          onClick={() => setShowSoulution(true)}
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
      <Dialog open={openAlertNewWord} onClick={handleCloseAlertNewWord}>
        <Alert severity="info">
          <AlertTitle>A new word is added</AlertTitle>Good Luck.
        </Alert>
      </Dialog>
      <Dialog open={showSoulution} onClose={handleCloseAlertShowSolution}>
        <Alert severity="error" icon={<WbIncandescentIcon />}>
          <AlertTitle>Solution</AlertTitle> `The solution is "{solution}".`
        </Alert>
      </Dialog>
      <Dialog open={showWon} onClose={handleCloseAlertShowWon}>
        <Alert severity="success" icon={<EmojiEventsIcon />}>
          <AlertTitle>You WON!!!</AlertTitle>
          {wonMessage[Math.floor(Math.random() * wonMessage.length)]}
        </Alert>
      </Dialog>
      <Dialog open={instruction} onClose={handleCloseAlertInstruction}>
        <Alert severity="info" icon={<SportsScoreIcon />}>
          <AlertTitle>Game rules</AlertTitle>
          <List>
            <ListItem>
              In this game you should guess which word with 5 characters has
              been chosen. You have 6 tries and in each row you should choose
              only 5 characters then press "Enter". Game will show you the
              result in colors. Green means the character exists and placed in
              correct position.Yellow Means the character exists but in a wrong
              place and gray means the character doesn't exist in the word.
            </ListItem>
            <ListItem>
              <VideogameAssetIcon sx={{ mr: "5px" }} />
              To start the game press "START".
            </ListItem>
            <ListItem>
              <VisibilityIcon sx={{ mr: "5px" }} />
              To see the word, press the eye-shaped button.
            </ListItem>
            <ListItem>
              <RefreshIcon sx={{ mr: "5px" }} />
              To refresh the page, press "REFRESH".
            </ListItem>
          </List>
        </Alert>
      </Dialog>
    </Box>
  );
};

export default Wordle;
