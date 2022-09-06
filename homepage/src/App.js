import React from "react";
import {LiveScoreBox }from "./Component/LiveScore";
import { ChakraProvider } from '@chakra-ui/react'
import { Navbar } from "./Component/NavbarBox/Navbar";
import { CenterBox } from "./Component/CenterBox/Center";
function App() {
  return (
    <ChakraProvider>
     
     <LiveScoreBox/>
    <Navbar/>
    <CenterBox/>
    </ChakraProvider>
    
  );
}

export default App;
