import * as React from "react";
import { TabList, Tabs } from "@chakra-ui/react";
import { Tab } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import "./Search.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BoxDiv = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 25px;
  background-color: white;
  text-align: start;
`;
const MainDiv = styled.div`
  font-family: BentonSans-Bold, Arial, Noto Sans, sans-serif;
  color: black;
  background-color: #eeeeee;
`;
const Search = () => {
  const [value, setValue] = React.useState("one");

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };
  const [search, setSearch] = React.useState("Sachin");
  const [newsData, setNewsData] = React.useState([
    {
      title: "",
      image_url: "",
      pubDate: "",
      content: "",
    },
  ]);

  const [players, setPlayers] = React.useState([
    { id: "25", name: "Sachin Tendulkar", teamName: "India" },
  ]);
  const handleChange = (e) => {
    let { value } = e.target;
    setSearch(value);
  };
  const handleSearch = () => {
    const axios = require("axios");

    const options = {
      method: "GET",
      url: "https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/search",
      params: { plrN: `${search}` },
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
        setPlayers(response.data.player);
      })
      .catch(function (error) {
        console.error(error);
      });

    const options3 = {
      method: "GET",
      url: "https://newsdata.io/api/1/news?apikey=pub_109705e83cb2fe2ad75170683a9132659e9e8&q=cricket",
    };

    axios
      .request(options3)
      .then(function (response) {
        setNewsData(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const navigator = useNavigate();
  const handleClickNewPage = (id) => {
    navigator(`/search/${id}`);
    return;
  };
  return (
    <MainDiv className="search_container_Ak">
      <h2 style={{ marginLeft: "3.5%", fontWeight: "700", padding: "20px" }}>
        SEARCH CRICINFO
      </h2>
      <div>
        <div>
          <BoxDiv style={{ padding: "0px" }}>
            <div
              style={{
                height: "60px",
                backgroundColor: "#F6F6F6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <input
                type="text"
                placeholder="search for player"
                name="search"
                value={search}
                onChange={handleChange}
                style={{
                  width: "85%",
                  height: "43px",
                  borderRadius: "5px 0 0 5px",
                  padding: "9px",
                  border: "1px solid black",
                  backgroundColor: "#F6F6F6",
                  fontSize: "20px",
                }}
              />
              <button
                onClick={handleSearch}
                style={{
                  backgroundColor: "#03a9f4",
                  border: "none",
                  borderRadius: "0 5px 5px 0",
                  color: "white",
                  padding: "9.5px 20px",
                  cursor: "pointer",
                }}
              >
                Search
              </button>
            </div>
            <div style={{ borderBottom: "1px solid gray", padding: "25px" }}>
              <p>You searched for '{search}'</p>
              <h3 style={{ padding: "10px 0", fontWeight: "700" }}>
                ESPNCRICINFO’S RECOMMENDED RESULTS
              </h3>
              <h4
                style={{ color: "#439EC9", margin: "0px", fontWeight: "500" }}
              >
                Visit Sachin Tendulkar's player page on ESPNcricinfo
              </h4>
            </div>
            {/* <Box sx={{ width: "100%", margin: "0px" }}>
              <Tabs
                value={value}
                onChange={handleChangeTab}
                aria-label="wrapped label tabs example"
              >
                <Tab
                  value="one"
                  label="All"
                  style={{ fontWeight: "700", fontSize: "15px" }}
                />
                <Tab
                  value="two"
                  label="Players"
                  style={{ fontWeight: "700", fontSize: "15px" }}
                />
                <Tab
                  value="three"
                  label="Stories"
                  style={{ fontWeight: "700", fontSize: "15px" }}
                />
                <Tab
                  value="four"
                  label="Videos"
                  style={{ fontWeight: "700", fontSize: "15px" }}
                />
                <Tab
                  value="five"
                  label="Photos"
                  style={{ fontWeight: "700", fontSize: "15px" }}
                />
                <Tab
                  value="six"
                  label="Gallery"
                  style={{ fontWeight: "700", fontSize: "15px" }}
                />
                <Tab
                  value="seven"
                  label="Quotes"
                  style={{ fontWeight: "700", fontSize: "15px" }}
                />
              </Tabs>
            </Box> */}
            <Tabs bg="white" borderRadius="10px">
              <TabList>
                <Tab>All</Tab>
                <Tab>Players</Tab>
                <Tab>Stories</Tab>
                <Tab>Videos</Tab>
                <Tab>Photos</Tab>
                <Tab>Gallery</Tab>
                <Tab>Quotes</Tab>
              </TabList>
            </Tabs>
          </BoxDiv>
          <BoxDiv>
            <h3
              style={{
                borderBottom: "1px solid #E4E4E4",
                textAlign: "start",
                fontWeight: "700",
                padding: "10px",
              }}
            >
              RESULTS IN PLAYERS {players.length}
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                textAlign: "start",
                gap: "15px",
              }}
            >
              {console.log(players)}
              {players.map((ele) => {
                return (
                  <div key={ele.id}>
                    <p style={{ margin: "0px" }}>{ele.name}</p>
                    <h4
                      style={{
                        color: "#439EC9",
                        margin: "0px",
                        fontWeight: "500",
                        cursor: "pointer",
                      }}
                      onClick={() => handleClickNewPage(ele.id)}
                    >
                      {ele.name}
                    </h4>
                    <p style={{ margin: "0px" }}>{ele.teamName}</p>
                  </div>
                );
              })}
            </div>
          </BoxDiv>
          <BoxDiv>
            <h3
              style={{
                borderBottom: "1px solid #E4E4E4",
                textAlign: "start",
                fontWeight: "700",
                padding: "10px",
              }}
            >
              RESULTS IN STORIES
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                alignItems: "flex-start",
              }}
            >
              {newsData.map((ele) => {
                let x = Math.random() * 1000;
                return (
                  <div
                    key={x}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img
                      src={
                        ele.image_url ||
                        "https://thumbs.dreamstime.com/b/cricket-bat-ball-26560801.jpg"
                      }
                      alt="text"
                      style={{
                        width: "220px",
                        marginRight: "15px",
                        height: "100px",
                      }}
                    />
                    <div style={{ width: "80%" }}>
                      <p style={{ margin: "0px" }}>News</p>
                      <p
                        style={{
                          margin: "0px",
                          fontWeight: "500",
                          color: "#439EC9",
                          fontSize: "15px",
                        }}
                      >
                        {ele.title}
                      </p>
                      <p style={{ margin: "0px", fontSize: "13px" }}>
                        {ele.pubDate}
                      </p>
                      <p style={{ margin: "0px", fontSize: "13px" }}>
                        {ele.content
                          ? ele.content.slice(0, 100)
                          : "Asia Cup 2022, IND vs SL: Rohit Sharma scored 72 off just 41 deliveries against Sri Lanka. PAK vs AFG, Asia Cup 2022:"}
                        ...
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </BoxDiv>
        </div>
        <div className="Advertisement_container">
          <img
            src="https://tpc.googlesyndication.com/simgad/605161044816525343?"
            alt="Advertisement "
            className="Advertisement_container"
          />
          <img
            src="https://tpc.googlesyndication.com/simgad/14828744798620350827?"
            alt="Advertisement "
            className="Advertisement_container"
          />
          <img
            src="https://tpc.googlesyndication.com/simgad/12885726672715156796?"
            alt="Advertisement "
            className="Advertisement_container"
          />
          <img
            src="https://tpc.googlesyndication.com/simgad/3023903939702895094?"
            alt="Advertisement "
            className="Advertisement_container"
          />
          <div></div>
          <img
            src="https://tpc.googlesyndication.com/simgad/14765500984849215753?"
            alt="Advertisement "
            className="Advertisement_container"
          />
        </div>
      </div>
    </MainDiv>
  );
};

export default Search;
