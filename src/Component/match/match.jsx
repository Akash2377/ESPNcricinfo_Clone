import React from "react";
import { Box, Text, Image, Avatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import { CUIAutoComplete } from "chakra-ui-autocomplete";
import { AuthContext } from "../../context/AuthContext";
import "./match.css";

const Match = ({ teamInfo, id, dateTimeGMT }) => {
//   const { isAuth } = React.useContext(AuthContext);
  const { teamfn } = React.useContext(AuthContext);


  const time = dateTimeGMT.substr(11, 18);

  return (
    <Link
      onClick={() =>
        teamfn(
          teamInfo[0].name,
          teamInfo[0].img,
          teamInfo[1].name,
          teamInfo[1].img
        )
      }
      to={`/matches/${id}`}
    >
      <Box  padding="9px 16px 33px">
        <Box
          boxShadow="md"
          filter="drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.1))"
          rounded="md"
          bg="white"
          p="0.5px"
        >
          <Box
            display="flex"
            flexDirection="column"
            padding="2"
            width="100%"
            gap="4"
            shadow="md"
            boxShadow="(0px 5px 10px rgba(0, 0, 0, 0.1))"
          >
            <Box>
              <Text as="b" color="#5217d4" className="matchname">
                Asia Cup
              </Text>
            </Box>
            <hr />
            <Box display="flex" justifyContent="space-between">
              <Box>
                <Avatar src={teamInfo[0].img}></Avatar>
                <Text className="teamname">{teamInfo[0].name}</Text>
              </Box>
              <Box>
                <Text className="time">{time}</Text>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="end"
                justifyContent="space-between"
              >
                <Avatar src={teamInfo[1].img}></Avatar>
                <Text className="teamname">{teamInfo[1].name}</Text>
              </Box>
            </Box>
          </Box>
          <Box p="9px 0px" bgColor="#f8f7f3">
            <Text className="machname" pl="2">
              Dubai International Cricket Stadium, Dubai
            </Text>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default Match;
