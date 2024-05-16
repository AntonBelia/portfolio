import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";

import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";

import Style from "./BaseLayout.module.scss";

export default function BaseLayout() {
  let [darkMode, setDarkMode] = useState(false);

  function handleClick() {
    setDarkMode(!darkMode);
  }

  return (
    <Box data-testid="base-layout" className={darkMode ? Style.dark : Style.light}>
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        minHeight={"100vh"}
        justifyContent={"space-between"}
      >
        <Grid item>
          <Navbar darkMode={darkMode} handleClick={handleClick} />
        </Grid>
        <Grid item flexGrow={1}>
          <Routes>
            <Route exact path={"/"} element={<Home />} />
            <Route exact path={"/about"} element={<About />} />
            <Route exact path={"/portfolio"} element={<Portfolio />} />
          </Routes>
        </Grid>
        <Grid item>
          <Box
            component={"footer"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            py={"1.5rem"}
            sx={{ opacity: 0.7 }}
            width={"100%"}
          >
            <p>Made by Belia Anton</p>
            <p>&copy; 2024</p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
