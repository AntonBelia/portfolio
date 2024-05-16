import React from "react";
import classNames from "classnames";
import { Box } from "@mui/material";

import Style from "./Terminal.module.scss";

function Terminal({ text }) {
  return (
    <Box
      component={"section"}
      className={classNames(Style.terminal, Style.shadowed)}
      width={{ xs: "80%", md: "50%" }}
      borderRadius={"0.5rem"}
      mb={"4rem"}
    >
      <Box
        sx={{ backgroundColor: "#8c8c8c" }}
        p={"0.5rem"}
        borderRadius={"0.5rem 0.5rem 0 0"}
        fontSize={"1rem"}
				display="flex"
      >
        <div className={classNames(Style.circle, Style.red)} />
        <div className={classNames(Style.circle, Style.amber)} />
        <div className={classNames(Style.circle, Style.green)} />
      </Box>
      <Box
        py={{ xs: "1rem", md: "2rem" }}
        px={{ xs: "2rem", md: "3rem" }}
        borderRadius={"0 0 0.5rem 0.5rem"}
        sx={{ backgroundColor: "#27242f" }}
        fontSize={"1.5rem"}
        fontFamily={"Courier New, Courier, monospace"}
      >
        {text}
      </Box>
    </Box>
  );
}

export default Terminal;
