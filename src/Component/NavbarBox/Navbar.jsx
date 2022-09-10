import React from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoMdMoon } from "react-icons/io";
import { BsTranslate } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { FaTh } from "react-icons/fa";
import styles from "./Nav.module.css";
import { themecontext } from "../../context/themecontext";

export const Navbar = ({ theme, handleTheme }) => {
  const { handleChangeAuth } = React.useContext(themecontext);
  const [open1, setopen1] = React.useState(false);
  const [open2, setopen2] = React.useState(false);
  const [open3, setopen3] = React.useState(false);
  const [open4, setopen4] = React.useState(false);
  const [open5, setopen5] = React.useState(false);
  const [open6, setopen6] = React.useState(false);
  const [open7, setopen7] = React.useState(false);
  const [open8, setopen8] = React.useState(false);
  return (
    <div className={styles.nvi}>
      <Box
        className={styles.Navbox}
        bg={theme === "light" ? "#03a9f4" : "#1d1e1f"}
        w="100%"
        p={4}
      >
        <img
          src="https://wassets.hscicdn.com/static/images/logo.png"
          alt="logo"
        />

        <div
          style={{
            display: "flex",
            gap: "30px",
            marginLeft: "20px",
          }}
        >
          <Link
            to="/live"
            position="relative"
            onMouseEnter={() => setopen1(true)}
          >
            Live Scores
            {open1 ? (
              <div
                style={
                  theme === "light"
                    ? null
                    : { backgroundColor: "#1d1e1f", color: "white" }
                }
                onMouseLeave={() => setopen1(false)}
                className={styles.dropdown}
              >
                <h1>Live Score Home</h1>
                <h1>Schedule</h1>
                <h1>Results</h1>
                <h1>Month views</h1>
                <h1>Season views</h1>
                <h1>International Calender</h1>
                <h1>Desktop Scoreboard</h1>
              </div>
            ) : null}
          </Link>

          <Link to="" position="relative" onMouseEnter={() => setopen2(true)}>
            Series
            {open2 ? (
              <div
                style={
                  theme === "light"
                    ? null
                    : { backgroundColor: "#1d1e1f", color: "white" }
                }
                className={styles.dropdown}
                onMouseLeave={() => setopen2(false)}
              >
                <h1>Asia Cup</h1> <h1>England vIndia "(W)"</h1>
                <h1>Duleep Trophy</h1> <h1>IND A - NZ A</h1>
                <h1>England v South Africs</h1> <h1>Australia v Zimbabwe</h1>
                <h1>Australia v New Zealand</h1> <h1>The Hundred "(M)"</h1>
                <h1>The Hundred (W)</h1> <h1>County Divl</h1>
                <h1>County Div2</h1> <h1>CPl 2022</h1>
                <h1>Women's CPL 2022</h1> <h1>Test Championship</h1>
                <h1>Women Championship</h1>
                <h1>CWC Super League</h1> <h1>-Future series</h1>
                <h1>-Archives</h1>{" "}
              </div>
            ) : null}
          </Link>

          <Link to="" position="relative" onMouseEnter={() => setopen3(true)}>
            {" "}
            Teams
            {open3 ? (
              <div
                style={
                  theme === "light"
                    ? null
                    : { backgroundColor: "#1d1e1f", color: "white" }
                }
                onMouseLeave={() => setopen3(false)}
                className={styles.dropdown}
              >
                <h1>Australia </h1> <h1>Afghanistan</h1>
                <h1> Bangladesh</h1> <h1>Ireland</h1>
                <h1> England</h1> <h1>Namibia</h1>
                <h1> India</h1> <h1>Nepal</h1>
                <h1> New Zealand</h1> <h1>Netherland</h1>
                <h1>Pakistan </h1> <h1>Oman</h1>
                <h1> South Africa </h1> <h1>PNG</h1>
                <h1>Sri Lanka </h1> <h1>Scotland</h1>
                <h1>West Indies</h1> <h1>UAE</h1>
                <h1> Zimbabwe</h1> <h1>USA</h1>
              </div>
            ) : null}
          </Link>

          <Link to="" position="relative" onMouseEnter={() => setopen4(true)}>
            {" "}
            News
            {open4 ? (
              <div
                style={
                  theme === "light"
                    ? { gridTemplateColumns: "repeat(1,1fr)" }
                    : {
                        backgroundColor: "#1d1e1f",
                        color: "white",
                        gridTemplateColumns: "repeat(1,1fr)",
                      }
                }
                onMouseLeave={() => setopen4(false)}
                className={styles.dropdown}
              >
                <h1>News Home</h1>
                <h1>Future of ODIs</h1>
                <h1>Ball-tampering</h1>
                <h1>Technology in cricket</h1>
                <h1>Racism</h1>
              </div>
            ) : null}
          </Link>

          <Link to="" position="relative" onMouseEnter={() => setopen5(true)}>
            Features
            {open5 ? (
              <div
                style={
                  theme === "light"
                    ? { gridTemplateColumns: "repeat(1,1fr)" }
                    : {
                        backgroundColor: "#1d1e1f",
                        color: "white",
                        gridTemplateColumns: "repeat(1,1fr)",
                      }
                }
                onMouseLeave={() => setopen5(false)}
                className={styles.dropdown}
              >
                <h1>Features Home</h1>
                <h1>Writers</h1>
                <h1>Photo galleries</h1>
                <h1>The Cricket Monthly </h1>
              </div>
            ) : null}
          </Link>

          <Link to="" position="relative" onMouseEnter={() => setopen6(true)}>
            {" "}
            Videos
            {open6 ? (
              <div
                style={
                  theme === "light"
                    ? null
                    : { backgroundColor: "#1d1e1f", color: "white" }
                }
                className={styles.dropdown}
                onMouseLeave={() => setopen6(false)}
              >
                <h1>Videos Home</h1> <h1>Playeers in focus</h1>
                <h1>T20 Time Out</h1> <h1>T20 Time Out Hindi</h1>
                <h1>Hindi Videos</h1> <h1>Match Day</h1>
                <h1>Haan ya Naa</h1> <h1>Fantasy Pick</h1>
                <h1>Polite Enquiris</h1> <h1>Run Order</h1>
                <h1>Newsroom</h1> <h1>25 Question</h1>
                <h1>News and Analysis</h1> <h1>Interviews</h1>
                <h1>Features</h1> <h1>Press Conferrence</h1>
                <h1>Youtube</h1>
              </div>
            ) : null}
          </Link>

          <Link to="" position="relative" onMouseEnter={() => setopen7(true)}>
            {" "}
            Stats
            {open7 ? (
              <div
                style={
                  theme === "light"
                    ? null
                    : { backgroundColor: "#1d1e1f", color: "white" }
                }
                className={styles.dropdown}
                onMouseLeave={() => setopen7(false)}
              >
                <h1>Stats home</h1> <h1>AskCricinfo</h1>
                <h1>IPl 2022</h1> <h1>Statsguru</h1>
                <h1>SuperStats</h1> <h1>2022 records</h1>
                <h1>All records</h1> <h1>Players</h1>
                <h1>Grounds</h1> <h1>Ranking</h1>
              </div>
            ) : null}
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            gap: "30px",
          }}
        >
          <Link
            to="/signup"
            style={{ display: "flex", gap: "10px" }}
            onClick={() => handleChangeAuth(false)}
          >
            <img
              src="https://wassets.hscicdn.com/static/images/fantasy-home.png"
              style={{ width: "20px" }}
            />
            Fantasy
          </Link>
          <Link
            to=""
            position="relative"
            onMouseEnter={() => setopen8(true)}
            onMouseLeave={() => setopen8(false)}
          >
            {" "}
            Edition
            {open8 ? (
              <div
                style={
                  theme === "light"
                    ? null
                    : { backgroundColor: "#1d1e1f", color: "white" }
                }
                className={styles.dropdown}
              >
                {" "}
                <h1>Africa</h1> <h1>Australia</h1>
                <h1>Bangladesh</h1> <h1>India</h1>
                <h1>India-Hindi</h1> <h1>New Zealand</h1>
                <h1>Pakistan</h1> <h1>Sri Lanka</h1>
                <h1>United Kingdom</h1> <h1>United States</h1>
                <h1>Global</h1>
              </div>
            ) : null}
          </Link>
          {theme === "light" ? (
            <IoMdMoon onClick={() => handleTheme()} size="24px" />
          ) : (
            <FiSun onClick={() => handleTheme()} size="24px" />
          )}

          <BsTranslate size="24px" />
          <FaTh size="24px" />

          <Link to="/search">
            <FaSearch size="20px" />
          </Link>
        </div>
      </Box>
      <Box className={styles.Navbox2} bg="#white" w="100%" p={4}>
        <div>Asia Cup 2022</div>
        <div className={styles.hr}></div>
        <div>
          <Link
            className={styles.link}
            style={{ fontWeight: 700 }}
            to="/"
            onClick={() => handleChangeAuth(true)}
          >
            Home
          </Link>
          <Link className={styles.link} to="/score">
            Fixtures and Results
          </Link>
          <Link className={styles.link} to="">
            Table
          </Link>
          <Link className={styles.link} to="">
            Videos
          </Link>
          <Link className={styles.link} to="">
            Stats
          </Link>
          <Link className={styles.link} to="">
            Squads
          </Link>
          <Link className={styles.link} to="">
            Seasons
          </Link>
          <Link className={styles.link} to="">
            Photos
          </Link>
        </div>
      </Box>
    </div>
  );
};
