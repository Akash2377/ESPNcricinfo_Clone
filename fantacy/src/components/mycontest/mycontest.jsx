import { Box, Heading, Text, Button } from "@chakra-ui/react";
import React from "react";
import { AuthContext } from "../../context/AuthContext";
const Mycontest = () => {
  const { contest } = React.useContext(AuthContext);
  console.log(contest);

  return contest.length == 0 ? (
    <Heading fontSize="2xl" mt="40" ml="12" color="red">
      Contest Not Found..Please Join Contest !!
    </Heading>
  ) : (
      <Box display='flex' w='100%' flexDirection='column'>{
        contest.map((ele) => {
          return (
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
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
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
          )
        })
      } </Box>
  );
};

export default Mycontest;
