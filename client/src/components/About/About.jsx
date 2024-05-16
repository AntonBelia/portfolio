import React, { useState, useEffect } from "react";
import Terminal from "../Terminal/Terminal";
import { Box } from "@mui/material";

import Typewriter from "../ui/Typewriter";

import Style from "./About.module.scss";

export default function About() {
  const [showSkillsTerminal, setShowSkillsTerminal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkillsTerminal(true);
    }, 7500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
    >
      <Terminal
        text={
          <>
            <p>
              <span className={Style.pink}> MacBook:~ anton_belia$</span> vim
              About_Anton_Belia
            </p>

            <Typewriter
              text={`
								Hello! I'm Anton, a full-stack developer from Uzhhorod.
								I enjoy building web applications using React, 
								and I'm currently diving deeper into NodeJS. 
								When I get absorbed in work, time seems to fly by,
								and sometimes it's hard to realize it's already the fourth night and time to go to bed.
							`}
            />
          </>
        }
      />
      {showSkillsTerminal && (
        <Terminal
          text={
            <>
              <p>
                <span className={Style.pink}>MacBook:~ anton_belia$</span> vim
                skills_tools
              </p>

              <Typewriter
                text={`Typescript, JavaScript (ES2015–2019), React,
								  Redux, Node.JS, Express, SQL, HTML5, CSS3, Sass (SCSS), Axios, Jest, Cypress,
									React Testing Library, Google Cloud Platform.
								`}
              />
            </>
          }
        />
      )}
    </Box>
  );
}
