import React from "react";
import classNames from "classnames";
import { Box } from "@mui/material";

import EmojiBullet from "../ui/EmojiBullet";
import SocialIcon from "../ui/SocialIcon";

import Style from "./Home.module.scss";
import me from "../../assets/img/self.png";

const bioBullets = [
  {
    link: "https://geojson.io/#map=12/48.61543/22.27689",
    emoji: "🧀",
    text: "based in Uzhgorod",
  },
  {
    link: "https://github.com/AntonBelia/portfolio",
    emoji: "💻",
    text: "code for this project",
  },
  {
    link: "https://www.instagram.com/zabava_uzh/",
    emoji: "👦",
    text: "great children's space",
  },
  {
    link: "mailto:anton.belia.dev@gmail.com?subject=Let's work on something together!",
    emoji: "✉️",
    text: "let's get in touch!",
  },
];

const socials = [
  {
    link: "https://github.com/AntonBelia",
    icon: "fa-brands fa-github",
    label: "Github",
  },
  {
    link: "http://www.linkedin.com/in/anton-belia-420206273",
    icon: "fa-brands fa-linkedin",
    label: "LinkedIn",
  },
  {
    link: "https://t.me/Belia_Anton",
    icon: "fa-brands fa-telegram",
    label: "Telegram",
  },
];

function Home() {
  return (
    <Box
      component={"main"}
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"calc(100vh - 175px)"}
    >
      <Box
				data-testid="home-avatar"
        className={classNames(Style.avatar, Style.shadowed)}
        component={"img"}
        alt="my photo"
        src={me}
        width={{ xs: "36vh", md: "41vh" }}
        height={{ xs: "35vh", md: "40vh" }}
        borderRadius={"50%"}
        p={"0.75rem"}
        mb={{ xs: "1rem", sm: 0 }}
        mr={{ xs: 0, md: "2rem" }}
      />
      <Box data-testid="home-content">
        <h1>
          Hi, I'm <span className={Style.firstName}>Anton</span>
          <span className={Style.hand}>🤚</span>
        </h1>
        <h2>I'm a frull-stack developer.</h2>
        <Box component={"ul"} p={"0.8rem"}>
          {bioBullets.map((bio, index) => (
            <li key={index}>
              <EmojiBullet link={bio.link} emoji={bio.emoji} text={bio.text} />
            </li>
          ))}
        </Box>
        <Box
					data-testid="home-socials"
          display={"flex"}
          gap={"1.5rem"}
          justifyContent={"center"}
          fontSize={{ xs: "2rem", md: "2.5rem" }}
        >
          {socials.map((social, index) => (
            <SocialIcon
              key={index}
              link={social.link}
              icon={social.icon}
              label={social.label}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Home;