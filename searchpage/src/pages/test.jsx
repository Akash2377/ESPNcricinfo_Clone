import React from "react";

const Test = () => {
  const hndleclick = () => {
    const axios = require("axios");

    const options = {
      method: "GET",
      url: "https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/search",
      params: { plrN: "sachin" },
      headers: {
        "X-RapidAPI-Key": "c5c01821f0msh0234c23c91a5487p18d353jsn2aca8382d9f4",
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return <div onClick={hndleclick}>test</div>;
};

export default Test;
