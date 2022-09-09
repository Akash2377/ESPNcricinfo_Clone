
import React from 'react'
import { Box,Avatar,Image } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <Box>
        <Box
          borderRadius="base"
          backgroundColor="#5217b0"
          maxHeight="60px"
          padding="12px 15px"
          pos="fixed"
          zIndex="1"
          top="0px"
          display="flex"
          left="31%"
          w="38%"
        >
          <Avatar size="sm" src="https://bit.ly/broken-link" />
          <Image
            ml="30%"
            h="5"
            w="50"
            src="https://espn.wonderwins.com/assets/images/header_logo.png"
          ></Image>
        </Box>
        <Box>
          <Tabs
            p="0px 19px"
            pos="fixed"
            w="41%"
            zIndex="modal"
            right="29%"
            bottom="0%"
          >
            <TabList
              h="14"
              // w="100%"
              display="flex"
              justifyContent="space-between"
              bg="ButtonFace"
            >
              <Link to='/matches'>
                <Tab as="b" w="32" _selected={{ color: "white", bg: "Purple" }}>
                  HOME
                </Tab>
              </Link>
              <Link to="/mycontest">
                <Tab as="b" w="38" _selected={{ color: "white", bg: "Purple" }}>
                  MY CONTEST
                </Tab>
              </Link>
              <Tab
                as="b"
                w="32"
                colorScheme="purple"
                _selected={{ color: "white", bg: "Purple" }}
              >
                MORE
              </Tab>
            </TabList>
          </Tabs>
        </Box>
      </Box>
    );
}

export default Navbar