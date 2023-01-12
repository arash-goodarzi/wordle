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
              width: {
                xs: "20px",
                sm: "25px",
                md: "30px",
                lg: "35px",
                xl: "40px",
              },
              height: {
                xs: "20px",
                sm: "25px",
                md: "30px",
                lg: "35px",
                xl: "40px",
              },
              fontSize: "1em",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              m: {
                xs: "0px",
                sm: "1px",
                md: "1px",
                lg: "2px",
                xl: "2px",
              },
            }}
            onClick={() => handleVirtualKeyboard(char)}
          >
            {char}
          </Paper>
        ))}
      </Box>
      <Box display="flex" color="red">
        {row2.map((char) => (
          <Paper
            key={char}
            sx={{
              width: {
                xs: "20px",
                sm: "25px",
                md: "30px",
                lg: "35px",
                xl: "40px",
              },
              height: {
                xs: "20px",
                sm: "25px",
                md: "30px",
                lg: "35px",
                xl: "40px",
              },
              fontSize: "1em",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              m: {
                xs: "0px",
                sm: "1px",
                md: "1px",
                lg: "2px",
                xl: "2px",
              },
            }}
            onClick={() => handleVirtualKeyboard(char)}
          >
            {char}
          </Paper>
        ))}
        <Paper
          sx={{
            width: {
              xs: "20px",
              sm: "25px",
              md: "30px",
              lg: "35px",
              xl: "40px",
            },
            height: {
              xs: "20px",
              sm: "25px",
              md: "30px",
              lg: "35px",
              xl: "40px",
            },
            fontSize: "0.75em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            m: {
              xs: "0px",
              sm: "1px",
              md: "1px",
              lg: "2px",
              xl: "2px",
            },
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
              width: {
                xs: "20px",
                sm: "25px",
                md: "30px",
                lg: "35px",
                xl: "40px",
              },
              height: {
                xs: "20px",
                sm: "25px",
                md: "30px",
                lg: "35px",
                xl: "40px",
              },
              fontSize: "1em",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              m: {
                xs: "0px",
                sm: "1px",
                md: "1px",
                lg: "2px",
                xl: "2px",
              },
            }}
            onClick={() => handleVirtualKeyboard(char)}
          >
            {char}
          </Paper>
        ))}
        <Paper
          sx={{
            width: {
              xs: "20px",
              sm: "25px",
              md: "30px",
              lg: "35px",
              xl: "40px",
            },
            height: {
              xs: "20px",
              sm: "25px",
              md: "30px",
              lg: "35px",
              xl: "40px",
            },
            fontSize: "0.5em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            m: {
              xs: "1px",
              sm: "2px",
              md: "3px",
              lg: "4px",
              xl: "5px",
            },
          }}
          onClick={(e) => handleVirtualKeyboard(e.target.firstChild.data)}
        >
          Backspace
        </Paper>
      </Box>
    </Box>
  );
};

export default Keyboard;
