import React from "react";
import {LiveScoreBox }from "./Component/LiveScore";
import { ChakraProvider } from '@chakra-ui/react'
import { Navbar } from "./Component/NavbarBox/Navbar";
function App() {
  return (
    <ChakraProvider>
     
     <LiveScoreBox/>
    <Navbar/>
    </ChakraProvider>
    
  );
}

export default App;
