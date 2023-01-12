import React from "react";
import { Box } from "@mui/material";

const Line = ({ guess, solution, isFinall }) => {
  const tiles = [];

  for (let index = 0; index < 5; index++) {
    const char = guess[index];

    let className = "";

    if (isFinall) {
      if (char === solution[index]) {
        className += " correct";
      } else if (solution.includes(char)) {
        className += " close";
      } else {
        className += " incorrect";
      }
    }

    tiles.push(
      <Box
        className={className}
        key={index}
        sx={{
          width: {
            xs: "50px",
            sm: "55px",
            md: "60px",
            lg: "65px",
            xl: "70px",
          },
          height: {
            xs: "50px",
            sm: "55px",
            md: "60px",
            lg: "65px",
            xl: "70px",
          },
          border: "1px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textTransform: "uppercase",
        }}
      >
        {char}
      </Box>
    );
  }
  return <div className="line">{tiles}</div>;
};

export default Line;
