import React from "react";
import { Box, Avatar, Text, background, Input } from "@chakra-ui/react";
import "../match/match.css";
import { useBoolean } from "@chakra-ui/react";
import styled from "styled-components";
const Teaminfo = ({
  id,
  playerImg,
  name,
  country,
  onclickfn,
  cr,
  sby,
  pts,
}) => {
  const [flag, setflag] = React.useState(false);
  var teamarr = ["team1", "team2"];

    const Title = styled.div`
      
      background-color: {${flag} ? blue:red};
    `;


  const bothfn = (name, country) => {
    onclickfn(name, country, flag);
    setflag((flag) => {
      return !flag;
    });
  };
    return (
      <Title>
        <Box
          onClick={() => bothfn(name, country)}
          key={id}
          display="flex"
          w="100%"
          gap="20"
          justifyContent="start"
        >
          <Box display="flex" w="50%">
            <Avatar src={playerImg}></Avatar>
            <Box ml="3">
              <Text className="machname">{name}</Text>
              <Text>{country}</Text>
            </Box>
          </Box>
          <Box display="flex" w="50%" justifyContent="space-between">
            <Box>{sby}</Box>
            <Box>{pts}</Box>
            <Box>{cr}</Box>
          </Box>
        </Box>
      </Title>
    );
};

export default Teaminfo;
