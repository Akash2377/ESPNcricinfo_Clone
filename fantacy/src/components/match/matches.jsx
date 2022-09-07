import React, { useEffect, useState } from "react";
import { Box, Text, Image, Avatar } from "@chakra-ui/react";

import Match from "./match";
const Matches = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getMatch();
  }, []);

  const getMatch = () => {
    fetch("https://rupesh-team.herokuapp.com/match")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };

  return (
    <Box margin='auto' border="1px" width="40%" p="1">
      {data.map((match) => (
        <Match key={match.id} {...match} />
      ))}
      {/* <Box>
        <Match></Match>
      </Box> */}
    </Box>
  );
};

export default Matches;
