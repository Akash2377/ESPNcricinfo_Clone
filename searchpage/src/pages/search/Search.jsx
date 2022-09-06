import React from "react";
import "./Search.css";
const Search = () => {
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
        "X-RapidAPI-Key": "c5c01821f0msh0234c23c91a5487p18d353jsn2aca8382d9f4",
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

  return (
    <div className="search_container_Ak">
      <h2>SEARCH CRICINFO</h2>
      <div>
        <div>
          <div
            style={{
              height: "60px",
              backgroundColor: "#F6F6F6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
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
                height: "20px",
                borderRadius: "5px 0 0 5px",
                padding: "5px",
                outline: "none",

                backgroundColor: "#F6F6F6",
                fontSize: "15px",
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
          <div
            style={{
              padding: "25px",
              backgroundColor: "white",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
          >
            <h3
              style={{ borderBottom: "1px solid #E4E4E4", textAlign: "start" }}
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
              {players.map((ele) => {
                return (
                  <div key={ele.id}>
                    <p style={{ margin: "0px" }}>{ele.name}</p>
                    <h4 style={{ color: "#439EC9", margin: "0px" }}>
                      {ele.name}
                    </h4>
                    <p style={{ margin: "0px" }}>{ele.teamName}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            style={{
              padding: "25px",
              backgroundColor: "white",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
          >
            <h3
              style={{ borderBottom: "1px solid #E4E4E4", textAlign: "start" }}
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
                  <div key={x}>
                    <p style={{ margin: "0px" }}>{ele.title}</p>
                    <img src={ele.image_url} alt="text" />
                    <p>{ele.pubDate}</p>
                    <p>{ele.content}</p>
                    <p style={{ margin: "0px" }}>{ele.teamName}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://tpc.googlesyndication.com/simgad/605161044816525343?"
            alt="Advertisement "
          />
          <img
            src="https://tpc.googlesyndication.com/simgad/14828744798620350827?"
            alt="Advertisement "
          />
          <img
            src="https://tpc.googlesyndication.com/simgad/12885726672715156796?"
            alt="Advertisement "
          />
          <img
            src="https://tpc.googlesyndication.com/simgad/3023903939702895094?"
            alt="Advertisement "
          />
          <div></div>
          <img
            src="https://tpc.googlesyndication.com/simgad/14765500984849215753?"
            alt="Advertisement "
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
