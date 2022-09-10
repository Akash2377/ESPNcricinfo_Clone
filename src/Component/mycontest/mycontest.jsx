import { Box, Heading, Text, Button } from "@chakra-ui/react";
import React from "react";
import NavbarFant from "../Fantacy-navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";
import Sideimg from "../sideimg/Sideimg";
const Mycontest = () => {
  const { contest } = React.useContext(AuthContext);
  console.log(contest);

  return (
    <>
      <NavbarFant />
      <Sideimg />
      <Box
        width="38%"
        className="contest-data"
        mt="20"
        display="flex"
        flexDirection="column"
        gap="5"
      >
        <Box display="flex" justifyContent="space-between">
          <Heading fontSize="23" color="#ff4333">
            Winner Takes Glory
          </Heading>
          <Text className="text">Winner 0</Text>
        </Box>
        <Box display="flex" bg="#f8f7f3" p="2" justifyContent="space-between">
          <Text as="B" className="text">
            49 Left
          </Text>
          <Text as="b" className="text">
            50 Teams
          </Text>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Button bg="black" color="white" size="xs">
              C
            </Button>
            <Button ml="2" bg="black" color="white" size="xs">
              M
            </Button>
          </Box>
          <Box display="flex" alignItems="center" gap="3">
            <Text className="text">Entry Fees</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Mycontest;
