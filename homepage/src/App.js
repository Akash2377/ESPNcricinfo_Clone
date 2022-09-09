import React from "react";
import {LiveScoreBox }from "./Component/LiveScore";
import { ChakraProvider } from '@chakra-ui/react'
import {Home} from "./Pages/Home"
import { themecontext } from "./context/themecontext";
import {Routes,route, Route} from "react-router-dom";
import { Navbar } from "./Component/NavbarBox/Navbar";
 export function App() {
  const {theme,handleTheme} =React.useContext(themecontext)
  console.log(theme);
  return (
    <ChakraProvider>
     <>
     <LiveScoreBox/>
     <Navbar theme={theme} handleTheme={handleTheme}/>
     <Routes>
      <Route path="/" element={ <Home theme={theme} handleTheme={handleTheme}/>}></Route>
     </Routes>
 </>
    </ChakraProvider>
    
  );
}

export default App;
