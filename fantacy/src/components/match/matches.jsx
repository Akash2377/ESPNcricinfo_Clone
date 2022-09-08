import React, { useEffect, useState } from "react";
import { Box, Text, Image, Avatar,Button } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
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
    <Box margin="auto" border="1px" width="40%" p="1">
      {data.map((match) => (
        <Match key={match.id} {...match} />
      ))}
      <Tabs p="0px 16px" pos="fixed" w="40%" zIndex="1" bottom="0%">
        
        <TabList
          h="14"
          // w="100%"
          display="flex"
          justifyContent="space-between"
          bg="ButtonFace"
        >
          <Tab as='b' w="32" _selected={{ color: "white", bg: "Purple" }}>
            HOME
          </Tab>
          <Tab as='b' w="38" _selected={{ color: "white", bg: "Purple" }}>
            MY CONTEST
          </Tab>
          <Tab
          
            as='b'
            w="32"
            colorScheme="purple"
            _selected={{ color: "white", bg: "Purple" }}
          >
            MORE
          </Tab>
        </TabList>
      </Tabs>
    </Box>
  );
};

export default Matches;
