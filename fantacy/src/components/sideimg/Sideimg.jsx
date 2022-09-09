import React from 'react'
import { Image,Heading,Box,Flex } from '@chakra-ui/react'
const Sideimg = () => {
    return (
      <h1>
        <Image
          position="fixed"
          h="100vh"
          right="0px"
          width="60%"
          src="https://espn.wonderwins.com/assets/images/main_bg.jpg"
          alt=""
        />
        <Box
          zIndex="2"
          gap="5"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          right="6%"
          position="fixed"
          top="27%"
        >
          <Image
            w="40"
            src="https://espn.wonderwins.com/assets/images/main_logo.png"
          />
          <Flex gap="5" flexDirection="row">
            <Heading color="white">INDIA'S COOLEST</Heading>
            <Heading color="yellow">FANTASY PLATFORM</Heading>
          </Flex>
          <Heading size="md" color="white">
            Download the App
          </Heading>
          <Flex gap="4">
            <Image
              w="48"
              src="https://espn.wonderwins.com/assets/images/android_icon.png"
            />
            <Image
              w="48"
              src="https://espn.wonderwins.com/assets/images/ios_icon.png"
            />
          </Flex>
        </Box>
      </h1>
    );
}

export default Sideimg