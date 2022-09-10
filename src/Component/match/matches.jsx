import React, { useEffect, useState } from "react";
import { Box, Text, Image, Avatar, Button } from "@chakra-ui/react";

import Match from "./match";
import NavbarFant from "../Fantacy-navbar/Navbar";
import Sideimg from "../sideimg/Sideimg";
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
    <>
      <NavbarFant /> <Sideimg />
      <Box mt="4%" width="40%" p="1">
        {data.map((match) => (
          <Match key={match.id} {...match} />
        ))}
      </Box>
    </>
  );
};

export default Matches;
