import * as React from "react";
import { TabList, TabPanels, Tabs } from "@chakra-ui/react";
import { Tab } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import "./Search.css";
import styled from "styled-components";
import { useParams } from "react-router-dom";
const initBatting = {
  headers: ["ROWHEADER", "Test", "ODI", "T20", "IPL"],
  values: [
    {
      values: ["Matches", "43", "45", "60", "109"],
    },
    {
      values: ["Innings", "74", "43", "56", "100"],
    },
    {
      values: ["Runs", "2547", "1665", "1901", "3889"],
    },
    {
      values: ["Balls", "4833", "1895", "1352", "2855"],
    },
    {
      values: ["Highest", "199", "112", "110", "132"],
    },
    {
      values: ["Average", "35.38", "45.0", "38.8", "48.01"],
    },
    {
      values: ["SR", "52.7", "87.86", "140.61", "136.22"],
    },
    {
      values: ["Not Out", "2", "6", "7", "19"],
    },
    {
      values: ["Fours", "309", "125", "166", "327"],
    },
    {
      values: ["Sixes", "17", "39", "77", "164"],
    },
    {
      values: ["Ducks", "7", "2", "5", "4"],
    },
    {
      values: ["50s", "13", "10", "16", "31"],
    },
    {
      values: ["100s", "7", "5", "2", "4"],
    },
    {
      values: ["200s", "0", "0", "0", "0"],
    },
    {
      values: ["300s", "0", "0", "0", "0"],
    },
    {
      values: ["400s", "0", "0", "0", "0"],
    },
  ],
  appIndex: {
    seoTitle: "KL Rahul Profile - Cricbuzz | Cricbuzz.com",
    webURL: "http://www.cricbuzz.com/profiles/8733/kl-rahul",
  },
  seriesSpinner: [
    {
      seriesName: "Career",
    },
    {
      seriesId: 4499,
      seriesName: "Asia Cup 2022",
    },
  ],
};
const initBolling = {
  headers: ["ROWHEADER", "Test", "ODI", "T20", "IPL"],
  values: [
    {
      values: ["Matches", "43", "45", "61", "109"],
    },
    {
      values: ["Innings", "0", "0", "0", "0"],
    },
    {
      values: ["Balls", "0", "0", "0", "0"],
    },
    {
      values: ["Runs", "0", "0", "0", "0"],
    },
    {
      values: ["Maidens", "0", "0", "0", "0"],
    },
    {
      values: ["Wickets", "0", "0", "0", "0"],
    },
    {
      values: ["Avg", "0", "0", "", "0"],
    },
    {
      values: ["Eco", "0", "0", "", "0"],
    },
    {
      values: ["SR", "0", "0", "", "0"],
    },
    {
      values: ["BBI", "-/-", "-/-", "0/0", "-/-"],
    },
    {
      values: ["BBM", "-/-", "-/-", "0/0", "-/-"],
    },
    {
      values: ["4w", "0", "0", "0", "0"],
    },
    {
      values: ["5w", "0", "0", "0", "0"],
    },
    {
      values: ["10w", "0", "0", "0", "0"],
    },
  ],
  appIndex: {
    seoTitle: "KL Rahul Profile - Cricbuzz | Cricbuzz.com",
    webURL: "http://www.cricbuzz.com/profiles/8733/kl-rahul",
  },
  seriesSpinner: [
    {
      seriesName: "Career",
    },
    {
      seriesId: 4499,
      seriesName: "Asia Cup 2022",
    },
  ],
};
const MainDiv = styled.div`
  font-family: BentonSans-Bold, Arial, Noto Sans, sans-serif;
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
  font-weight: 600;
  font-size: 17px;
  font-family: BentonSans-Bold, Arial, Noto Sans, sans-serif; ;
`;
const PlayerDetails = () => {
  const [batting, setBatting] = React.useState(initBatting);
  const [bolling, setBolling] = React.useState(initBolling);
  const [viewMore, setViewMore] = React.useState(true);
  const [value, setValue] = React.useState("one");
  const [player, setPlayers] = React.useState({});
  console.log(batting);
  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
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
    bio,
  } = player;
  const { id } = useParams();
  const axios = require("axios");
  const handleView = () => {
    setViewMore(!viewMore);
  };
  React.useEffect(() => {
    const options = {
      method: "GET",
      url: `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${id}`,
      headers: {
        // "X-RapidAPI-Key": "392c50f76dmsh7fcd8d624bc3d99p1cf214jsnaad3594475cf",
        // "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
        // "X-RapidAPI-Key": "c5c01821f0msh0234c23c91a5487p18d353jsn2aca8382d9f4",
        // "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
        "X-RapidAPI-Key": "b657969a7amsh192b4e42ea64172p1d2c30jsnfa8e4bbaa2df",
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setPlayers(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    const options3 = {
      method: "GET",
      url: `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${id}/batting`,
      headers: {
        // "X-RapidAPI-Key": "392c50f76dmsh7fcd8d624bc3d99p1cf214jsnaad3594475cf",
        // "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
        // "X-RapidAPI-Key": "c5c01821f0msh0234c23c91a5487p18d353jsn2aca8382d9f4",
        // "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
        "X-RapidAPI-Key": "b657969a7amsh192b4e42ea64172p1d2c30jsnfa8e4bbaa2df",
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

    axios
      .request(options3)
      .then(function (response) {
        setBatting(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    const options4 = {
      method: "GET",
      url: `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${id}/balling`,
      headers: {
        // "X-RapidAPI-Key": "392c50f76dmsh7fcd8d624bc3d99p1cf214jsnaad3594475cf",
        // "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
        // "X-RapidAPI-Key": "c5c01821f0msh0234c23c91a5487p18d353jsn2aca8382d9f4",
        // "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
        "X-RapidAPI-Key": "b657969a7amsh192b4e42ea64172p1d2c30jsnfa8e4bbaa2df",
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

    axios
      .request(options4)
      .then(function (response) {
        setBolling(response.data);
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
            src="https://rukminim1.flixcart.com/image/332/398/kzu6efk0/t-shirt/a/y/d/xl-indian-cricket-team-t-shirt-liodix-original-imagbrapve5jahh6.jpeg?q=50"
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
            gap: "15px",
          }}
        >
          {/* <Box
            sx={{ width: "100%", margin: "0px" }}
            style={{ backgroundColor: "white", borderRadius: "10px" }}
          >
            <Tabs
              value={value}
              onChange={handleChangeTab}
              aria-label="wrapped label tabs example"
              style={{ marginLeft: "100px" }}
            >
              <Tab value="one" label="Overview" style={{ fontWeight: "700" }} />
              <Tab value="two" label="Stats" style={{ fontWeight: "700" }} />
              <Tab
                value="three"
                label="Records"
                style={{ fontWeight: "700" }}
              />
              <Tab value="four" label="Matches" style={{ fontWeight: "700" }} />
              <Tab value="five" label="Videos" style={{ fontWeight: "700" }} />
              <Tab value="six" label="News" style={{ fontWeight: "700" }} />
              <Tab value="seven" label="Photos" style={{ fontWeight: "700" }} />
            </Tabs>
          </Box> */}
          <Tabs bg="white" borderRadius="10px">
            <TabList>
              <Tab>Overview</Tab>
              <Tab>Stats</Tab>
              <Tab>Records</Tab>
              <Tab>News</Tab>
              <Tab>Photos</Tab>
              <Tab>Photos</Tab>
            </TabList>
          </Tabs>
          <div
            style={{
              width: "90%",
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "2% 5%",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "5px",
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
                <H3>{height}</H3>
              </div>
              <div>
                <p>BIRTH PLACE</p>
                <H3>{birthPlace}</H3>
              </div>
            </div>
            <div
              style={
                viewMore
                  ? { height: "190px", overflow: "hidden" }
                  : { height: "auto" }
              }
              dangerouslySetInnerHTML={{
                __html: bio,
              }}
            ></div>
            <p
              onClick={handleView}
              style={{
                textAlign: "center",
                color: "blue",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {viewMore ? "View More" : "View Less"}
            </p>
          </div>
          <div
            style={{
              width: "90%",
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "2% 5%",
            }}
          >
            <div style={{ borderBottom: "1px solid gray" }}>
              <h4>Career Averages</h4>
            </div>
            <h4>Batting </h4>
            <table>
              <thead>
                <tr>
                  <th>FORMAT</th>
                  <th>Mat</th> <th>Inns</th> <th>NO</th> <th>Runs</th>
                  <th>HS</th> <th>Ave</th> <th>BF</th> <th>SR</th> <th>100s</th>
                  <th>50s</th> <th>4s</th> <th>6s</th> <th>Ct</th> <th>St</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{batting.headers[1]}</td>
                  <td>{batting.values[0].values[1]}</td>
                  <td>{batting.values[1].values[1]}</td>
                  <td>{batting.values[7].values[1]}</td>
                  <td>{batting.values[2].values[1]}</td>
                  <td>{batting.values[4].values[1]}</td>
                  <td>{batting.values[5].values[1]}</td>
                  <td>{batting.values[3].values[1]}</td>
                  <td>{batting.values[6].values[1]}</td>
                  <td>{batting.values[12].values[1]}</td>
                  <td>{batting.values[11].values[1]}</td>
                  <td>{batting.values[8].values[1]}</td>
                  <td>{batting.values[9].values[1]}</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>{batting.headers[2]}</td>
                  <td>{batting.values[0].values[2]}</td>
                  <td>{batting.values[1].values[2]}</td>
                  <td>{batting.values[7].values[2]}</td>
                  <td>{batting.values[2].values[2]}</td>
                  <td>{batting.values[4].values[2]}</td>
                  <td>{batting.values[5].values[2]}</td>
                  <td>{batting.values[3].values[2]}</td>
                  <td>{batting.values[6].values[2]}</td>
                  <td>{batting.values[12].values[2]}</td>
                  <td>{batting.values[11].values[2]}</td>
                  <td>{batting.values[8].values[2]}</td>
                  <td>{batting.values[9].values[2]}</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>{batting.headers[3]}</td>
                  <td>{batting.values[0].values[3]}</td>
                  <td>{batting.values[1].values[3]}</td>
                  <td>{batting.values[7].values[3]}</td>
                  <td>{batting.values[2].values[3]}</td>
                  <td>{batting.values[4].values[3]}</td>
                  <td>{batting.values[5].values[3]}</td>
                  <td>{batting.values[3].values[3]}</td>
                  <td>{batting.values[6].values[3]}</td>
                  <td>{batting.values[12].values[3]}</td>
                  <td>{batting.values[11].values[3]}</td>
                  <td>{batting.values[8].values[3]}</td>
                  <td>{batting.values[9].values[3]}</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>{batting.headers[4]}</td>
                  <td>{batting.values[0].values[4]}</td>
                  <td>{batting.values[1].values[4]}</td>
                  <td>{batting.values[7].values[4]}</td>
                  <td>{batting.values[2].values[4]}</td>
                  <td>{batting.values[4].values[4]}</td>
                  <td>{batting.values[5].values[4]}</td>
                  <td>{batting.values[3].values[4]}</td>
                  <td>{batting.values[6].values[4]}</td>
                  <td>{batting.values[12].values[4]}</td>
                  <td>{batting.values[11].values[4]}</td>
                  <td>{batting.values[8].values[4]}</td>
                  <td>{batting.values[9].values[4]}</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
            <h4>Bowling </h4>
            <table>
              <thead>
                <tr>
                  <th>FORMAT</th>
                  <th>Mat</th> <th>Inns</th> <th>Balls</th> <th>Runs</th>
                  <th>Wkts</th> <th>BBI</th> <th>BBM</th> <th>Ave</th>
                  <th>Econ</th>
                  <th>SR</th> <th>4w</th> <th>5w</th> <th>10w</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{bolling.headers[1]}</td>
                  <td>{bolling.values[0].values[1]}</td>
                  <td>{bolling.values[1].values[1]}</td>
                  <td>{bolling.values[2].values[1]}</td>
                  <td>{bolling.values[3].values[1]}</td>
                  <td>{bolling.values[5].values[1]}</td>
                  <td>{bolling.values[8].values[1]}</td>
                  <td>{bolling.values[9].values[1]}</td>
                  <td>{bolling.values[6].values[1]}</td>
                  <td>{bolling.values[10].values[1]}</td>
                  <td>{bolling.values[7].values[1]}</td>
                  <td>{bolling.values[11].values[1]}</td>
                  <td>{bolling.values[12].values[1]}</td>
                  <td>{bolling.values[13].values[1]}</td>
                </tr>
                <tr>
                  <td>{bolling.headers[2]}</td>
                  <td>{bolling.values[0].values[2]}</td>
                  <td>{bolling.values[1].values[2]}</td>
                  <td>{bolling.values[7].values[2]}</td>
                  <td>{bolling.values[2].values[2]}</td>
                  <td>{bolling.values[4].values[2]}</td>
                  <td>{bolling.values[5].values[2]}</td>
                  <td>{bolling.values[3].values[2]}</td>
                  <td>{bolling.values[6].values[2]}</td>
                  <td>{bolling.values[11].values[2]}</td>
                  <td>{bolling.values[10].values[2]}</td>
                  <td>{bolling.values[8].values[2]}</td>
                  <td>{bolling.values[9].values[2]}</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>{bolling.headers[3]}</td>
                  <td>{bolling.values[0].values[3]}</td>
                  <td>{bolling.values[1].values[3]}</td>
                  <td>{bolling.values[7].values[3]}</td>
                  <td>{bolling.values[2].values[3]}</td>
                  <td>{bolling.values[4].values[3]}</td>
                  <td>{bolling.values[5].values[3]}</td>
                  <td>{bolling.values[3].values[3]}</td>
                  <td>{bolling.values[6].values[3]}</td>
                  <td>{bolling.values[11].values[3]}</td>
                  <td>{bolling.values[10].values[3]}</td>
                  <td>{bolling.values[8].values[3]}</td>
                  <td>{bolling.values[9].values[3]}</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>{bolling.headers[4]}</td>
                  <td>{bolling.values[0].values[4]}</td>
                  <td>{bolling.values[1].values[4]}</td>
                  <td>{bolling.values[7].values[4]}</td>
                  <td>{bolling.values[2].values[4]}</td>
                  <td>{bolling.values[4].values[4]}</td>
                  <td>{bolling.values[5].values[4]}</td>
                  <td>{bolling.values[3].values[4]}</td>
                  <td>{bolling.values[6].values[4]}</td>
                  <td>{bolling.values[11].values[4]}</td>
                  <td>{bolling.values[10].values[4]}</td>
                  <td>{bolling.values[8].values[4]}</td>
                  <td>{bolling.values[9].values[4]}</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </BoxDiv>
    </MainDiv>
  );
};

export default PlayerDetails;
