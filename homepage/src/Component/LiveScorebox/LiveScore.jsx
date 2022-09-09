import React from "react";
import { Box } from "@chakra-ui/react";
import { themecontext } from "../../context/themecontext";
import { Carousel } from "@trendyol-js/react-carousel";
import styles from "./livescore.module.css";
import { Score } from "../Scorebox/Score";
export const LiveScoreBox = () => {
  const { theme, handleTheme } = React.useContext(themecontext);

  return (
    <div
      style={
        theme === "light"
          ? null
          : {
              backgroundColor: "#1d1e1f",
              color: "white",
              border: "1px solid #2b2c2d",
            }
      }
      className={styles.mainb}
    >
      <Box paddingLeft="60px" className={styles.box1} w="100%" p={4}>
        <p>Matches(12)</p>
        <p>Asia cup(1)</p>
        <p>NZ-A in IND(1)</p>
        <p>ENG v SA(1)</p>
        <p>Duleep Trophy(2)</p>
        <p>Indian Women in England (1)</p>
        <p>SL-U19 in ENg(1)</p>
        <p>CPL(2)</p>
        <p>CAN T20(3)</p>
      </Box>
      <div
        style={
          theme === "light"
            ? null
            : {
                backgroundColor: "#1d1e1f",
                color: "white",
                border: "1px solid #2b2c2d",
              }
        }
        className={styles.box2}
      >
        <Score
          info={{
            team1: "England A",
            team2: "South Africa  A",
            score: "(15ov) 101/5",
            //   status:"Day2 NZ choose to field",
            con: "Day1 SA choose to field",
            //   head:"2ND FOUR-DAY GAME,HUBLI",
            image1:
              "https://purecatamphetamine.github.io/country-flag-icons/3x2/EG.svg",
            image2:
              "https://purecatamphetamine.github.io/country-flag-icons/3x2/SA.svg",
          }}
          theme={theme}
        />
        <Score
          info={{
            team1: "India A",
            team2: "New Zealand A",
            score: "(55ov) 201/5",
            con: "Day2 NZ choose to field",
            // //  con:"Tom Bruce : free spirit who's found his identity ",
            //   head:"2ND FOUR-DAY GAME,HUBLI",
            image1:
              "https://purecatamphetamine.github.io/country-flag-icons/3x2/IN.svg",
            image2:
              "https://purecatamphetamine.github.io/country-flag-icons/3x2/NZ.svg",
          }}
          theme={theme}
        />
        <Score
          info={{
            team1: "Srilanka A",
            team2: "West Indies A",
            score: "(19ov) 151/8",
            con: "Day2 WI choose to Batting",
            //   con:"Tom Bruce : free spirit who's found his identity ",

            image1:
              "https://purecatamphetamine.github.io/country-flag-icons/3x2/LK.svg",
            image2:
              "https://purecatamphetamine.github.io/country-flag-icons/3x2/VI.svg",
          }}
          theme={theme}
        />
        <Score
          info={{
            team1: "America A",
            team2: "Pakistan A",
            score: "(3ov) 21/2",
            con: "Day3 PK choose to field",
            //   con:"Tom Bruce : free spirit who's found his identity ",
            //   head:"2ND FOUR-DAY GAME,HUBLI",
            image1:
              "https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg",
            image2:
              "https://purecatamphetamine.github.io/country-flag-icons/3x2/PK.svg",
          }}
          theme={theme}
        />
      </div>
    </div>
  );
};
