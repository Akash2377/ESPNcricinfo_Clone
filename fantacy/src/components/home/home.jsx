import React from "react";
import { Box, Button } from "@chakra-ui/react";
import Contest from "./Contest";
import { AuthContext } from "../../context/AuthContext";
import { Link, useRouteMatch, useParams } from "react-router-dom";



const Home = () => {
    const { teamname } = React.useContext(AuthContext);
    const { setcontest } = React.useContext(AuthContext);

    function joincontest() {
        setcontest((con) => {
            return [
              ...con,
              {
                team1: teamname.team1,
                team1img: teamname.team1img,
                team2: teamname.team2,
                team2img: teamname.team2img,
              },
            ];
        })
    }

  return (
    <Box mt="4%" p="10" w="41%">
      <Contest joincontest={joincontest} />
      <Contest joincontest={joincontest} />
      <Box m="auto">
        <Link to="/matches/07db383b-d6cd-4b33-8129-15e9ea2873be">
          <Button
            m="auto"
            display="block"
            w="96"
            size="lg"
            colorScheme="purple"
          >
            {teamname.length < 1 ? "Create Team" : `TEAM 1`}
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Home;
