import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./Search.css";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const MainDiv = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: black;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BoxDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin-top: 15px;
`;
const H3 = styled.h3`
  margin-top: -5px;
  font-weight: 500;
  font-size: 15px;
`;
const PlayerDetails = () => {
  const [value, setValue] = React.useState("one");
  const [player, setPlayers] = React.useState({});
  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };
  const { id } = useParams();
  const axios = require("axios");
  const options = {
    method: "GET",
    url: `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${id}`,
    headers: {
      "X-RapidAPI-Key": "c5c01821f0msh0234c23c91a5487p18d353jsn2aca8382d9f4",
      "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    },
  };
  const {
    name,
    DoBFormat,
    DoB,
    nickName,
    bat,
    bowl,
    role,
    height,
    birthPlace,
  } = player;
  React.useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setPlayers(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <MainDiv>
      <img
        src="https://tpc.googlesyndication.com/simgad/4142572825207069660?"
        alt="advertisement"
      />
      <BoxDiv>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <img
            src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320/lsci/db/PICTURES/CMS/316400/316486.png"
            alt="advertisement"
          />
          <img
            src="https://tpc.googlesyndication.com/simgad/1350654057507125249?"
            alt="advertisement"
          />
          <img
            src="https://tpc.googlesyndication.com/simgad/8864073877610503486?"
            alt="advertisement"
          />
          <img
            src="https://tpc.googlesyndication.com/simgad/5951904539936628970?"
            alt="advertisement"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "67%",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <Box sx={{ width: "100%", margin: "0px" }}>
            <Tabs
              value={value}
              onChange={handleChangeTab}
              aria-label="wrapped label tabs example"
              style={{ marginLeft: "100px" }}
            >
              <Tab value="one" label="Overview" />
              <Tab value="two" label="Stats" />
              <Tab value="three" label="Records" />
              <Tab value="four" label="Matches" />
              <Tab value="five" label="Videos" />
              <Tab value="six" label="News" />
              <Tab value="seven" label="Photos" />
            </Tabs>
          </Box>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "5px",
              width: "80%",
            }}
          >
            <div>
              <p>FULL NAME</p>
              <H3>{name}</H3>
            </div>

            <div>
              <p>BORN</p>
              <H3>{DoBFormat}</H3>
            </div>
            <div>
              <p>AGE</p>
              <H3>{DoB}</H3>
            </div>
            <div>
              <p>NICKNAMES</p>
              <H3>{nickName}</H3>
            </div>
            <div>
              <p>BATTING STYLE</p>
              <H3>{bat}</H3>
            </div>
            <div>
              <p>BOWLING STYLE</p>
              <H3>{bowl}</H3>
            </div>
            <div>
              <p>PLAYING ROLE</p>
              <H3>{role}</H3>
            </div>
            <div>
              <p>HEIGHT</p>
              <h3>{height}</h3>
            </div>
            <div>
              <p>BIRTH PLACE</p>
              <H3>{birthPlace}</H3>
            </div>
          </div>
          <p>{birthPlace}</p>
        </div>
      </BoxDiv>
    </MainDiv>
  );
};

export default PlayerDetails;
