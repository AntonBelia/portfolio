import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";

import Toggler from "../ui/Toggler";

import logo from "../../assets/img/logo1.png";
import Style from "./Navbar.module.scss";

const links = [
  {
    name: "Home",
    to: "/",
    active: "home",
  },
  {
    name: "About Me",
    to: "/about",
    active: "about",
  },
  {
    image: logo,
    to: "/",
    active: "home",
  },
  {
    name: "Portfolio",
    to: "/portfolio",
    active: "portfolio",
  },
];

export default function Navbar({ darkMode, handleClick }) {
  const location = useLocation();
  const [active, setActive] = useState(
    location.pathname === "/"
      ? "home"
      : location.pathname.slice(1, location.pathname.length)
  );

  return (
    <Box component={"nav"} width={"100%"}>
      <Box
        component={"ul"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ xs: "2rem", md: "8rem" }}
        textTransform={"lowercase"}
        fontSize={"1rem"}
      >
        {links.map((link, index) => (
          <li
            className={
              link.active === active && !link.image ? Style.active : ""
            }
            key={index}
          >
            <Link
              aria-label={"home page"}
              to={link.to}
              onClick={() => setActive(link.active)}
            >
              {link.name && (
                <p data-testid={link.active} style={{ paddingBottom: "0.5rem" }}>{link.name}</p>
              )}
              {link.image && (
                <img alt="logo" src={link.image} style={{ maxWidth: "75px" }} />
              )}
            </Link>
          </li>
        ))}
        <li>
          <Toggler darkMode={darkMode} handleClick={handleClick} />
        </li>
      </Box>
    </Box>
  );
}
