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
      mt="5px"
      mb="5px"
    >
      <Box display="flex" color="red">
        {row1.map((char) => (
          <Paper
            key={char}
            sx={{
              width: {
                xs: "30px",
                sm: "35px",
                md: "40px",
                lg: "45px",
                xl: "50px",
              },
              height: {
                xs: "30px",
                sm: "35px",
                md: "40px",
                lg: "45px",
                xl: "50px",
              },
              fontSize: "1em",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              m: {
                xs: "1px",
                sm: "2px",
                md: "2px",
                lg: "3px",
                xl: "4px",
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
                xs: "30px",
                sm: "35px",
                md: "40px",
                lg: "45px",
                xl: "50px",
              },
              height: {
                xs: "30px",
                sm: "35px",
                md: "40px",
                lg: "45px",
                xl: "50px",
              },
              fontSize: "1em",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              m: {
                xs: "1px",
                sm: "2px",
                md: "2px",
                lg: "3px",
                xl: "4px",
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
              xs: "30px",
              sm: "35px",
              md: "40px",
              lg: "45px",
              xl: "50px",
            },
            height: {
              xs: "30px",
              sm: "35px",
              md: "40px",
              lg: "45px",
              xl: "50px",
            },
            fontSize: "0.75em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            m: {
              xs: "1px",
              sm: "2px",
              md: "2px",
              lg: "3px",
              xl: "4px",
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
                xs: "30px",
                sm: "35px",
                md: "40px",
                lg: "45px",
                xl: "50px",
              },
              height: {
                xs: "30px",
                sm: "35px",
                md: "40px",
                lg: "45px",
                xl: "50px",
              },
              fontSize: "1em",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              m: {
                xs: "1px",
                sm: "2px",
                md: "2px",
                lg: "3px",
                xl: "4px",
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
              xs: "55px",
              sm: "60px",
              md: "65px",
              lg: "70px",
              xl: "75px",
            },
            height: {
              xs: "30px",
              sm: "35px",
              md: "40px",
              lg: "45px",
              xl: "50px",
            },
            fontSize: "0.7em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            m: {
              xs: "1px",
              sm: "2px",
              md: "2px",
              lg: "3px",
              xl: "4px",
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
