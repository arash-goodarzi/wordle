import React from "react";
import { Box, Paper } from "@mui/material";

const Keyboard = () => {
  const handleVirtualKeyboard = (e) => {
    window.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: e,
        keyCode: 69, // example values.
        code: "KeyE", // put everything you need in this object.
        which: 69,
        shiftKey: false, // you don't need to include values
        ctrlKey: false, // if you aren't going to use them.
        metaKey: false, // these are here for example's sake.
      })
    );
  };

  const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const row3 = ["Z", "X", "C", "V", "B", "N", "M"];
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box display="flex" color="red">
        {row1.map((char) => (
          <Paper
            key={char}
            sx={{
              height: "60px",
              minWidth: "60px",
              fontSize: "1em",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              m: "5px",
            }}
            onClick={() => handleVirtualKeyboard(char)}
          >
            {char}
          </Paper>
        ))}
        <Paper
          sx={{
            height: "60px",
            minWidth: "60px",
            fontSize: "1em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            m: "5px",
          }}
          onClick={(e) => handleVirtualKeyboard(e.target.firstChild.data)}
        >
          Backspace
        </Paper>
      </Box>
      <Box display="flex" color="red">
        {row2.map((char) => (
          <Paper
            key={char}
            sx={{
              height: "60px",
              width: "60px",
              fontSize: "1em",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              m: "5px",
            }}
            onClick={() => handleVirtualKeyboard(char)}
          >
            {char}
          </Paper>
        ))}
        <Paper
          sx={{
            height: "60px",
            minWidth: "60px",
            fontSize: "1em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            m: "5px",
          }}
          onClick={(e) => handleVirtualKeyboard(e.target.firstChild.data)}
        >
          Enter
        </Paper>
      </Box>
      <Box display="flex" color="red">
        {row3.map((char) => (
          <Paper
            key={char}
            sx={{
              height: "60px",
              width: "60px",
              fontSize: "1em",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              m: "5px",
            }}
            onClick={() => handleVirtualKeyboard(char)}
          >
            {char}
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default Keyboard;
