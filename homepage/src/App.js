import React from "react";
import {LiveScoreBox }from "./Component/LiveScore";
import { ChakraProvider } from '@chakra-ui/react'
import {Home} from "./Pages/Home"
import { themecontext } from "./context/themecontext";
 export function App() {
  const {theme,handleTheme} =React.useContext(themecontext)
  console.log(theme);
  return (
    <ChakraProvider>
     
     <LiveScoreBox/>
  <Home theme={theme} handleTheme={handleTheme}/>
    </ChakraProvider>
    
  );
}

export default App;
