import React from "react";
import { Box, Avatar, Text } from "@chakra-ui/react";
import { AuthContext } from "../../context/AuthContext";
import Playerlist from "./Playerlist"
import "../match/match.css";
const Team = () => {
  
  const { teamname } = React.useContext(AuthContext);
  const { team1, team1img, team2, team2img } = teamname;

  

  return (
    <Box width="40%" mt='12' p="5">
      <Box></Box>
      <Box
        w="100%"
        boxShadow="md"
        filter="drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.1))"
        rounded="md"
              p="2"
              
      >
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Avatar src={team1img}></Avatar>
            <Text className="teamname">{team1}</Text>
          </Box>
          <Box>
            <Text className="time">Soon..</Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="end"
            justifyContent="space-between"
          >
            <Avatar src={team2img}></Avatar>
            <Text className="teamname">{team2}</Text>
          </Box>
        </Box>
          </Box>
          <Playerlist team1={team1} team2={team2} />
    </Box>
  );
};

export default Team;
