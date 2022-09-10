import React from "react";
import { Box, Avatar, Text, background, Input,Switch } from "@chakra-ui/react";
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
  page
}) => {
    const [flag, setflag] = React.useState(false);
    // const [flag, setFlag] = useBoolean(false);


  const Title = styled.div`
    padding: 1rem 1rem;
    //   border: ${flag ? "none" : "1px solid #F7ECDE"};
    background-color: ${flag ? "#F7ECDE" : "#F8F8F9"};
    //   border-radius: 5%;
  `;

    const bothfn = (name, country, id, flag) => {
        onclickfn(id, name, country, flag);
        setflag((flag) => {
          return !flag;
        });
        
    
  };
    return (
      <Title>
        <Box
          onClick={() => bothfn(name, country, id, flag)}
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
