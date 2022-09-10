import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./Pages/Home";
import { themecontext } from "./context/themecontext";
import { Routes, route, Route } from "react-router-dom";
import { Navbar } from "./Component/NavbarBox/Navbar";
import Team from "./Component/teampage/team";
import Mycontest from "./Component/mycontest/mycontest";
import LivePage from "./Pages/LivePage/LivePage";

import PlayerDetails from "./Pages/search/PlayerDetails";
import Search from "./Pages/search/Search";
import Signup from "./Component/login/Signup";
import Login from "./Component/login/Login";
import { Commentary } from "./Component/liveScore/commentry";
import { PlayingXI } from "./Component/liveScore/playing";
import { ScoreCard } from "./Component/liveScore/scorecard";
import { PonitTable } from "./Component/liveScore/pointTable";
import { Score } from "./Component/liveScore/score";
import MathInfo from "./Component/home/home";
import Matches from "./Component/match/matches";
import { LiveScoreBox } from "./Component/LiveScorebox/LiveScore";
export function App() {
  const { theme, handleTheme, AuthenticationForNav } =
    React.useContext(themecontext);
  console.log(theme);
  return (
    <ChakraProvider>
      <>
        {AuthenticationForNav ? <LiveScoreBox /> : <></>}
        <Navbar theme={theme} handleTheme={handleTheme} />
        <Routes>
          <Route
            path="/"
            element={<Home theme={theme} handleTheme={handleTheme} />}
          ></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/matches" element={<Matches />}></Route>
          <Route path="/mycontest" element={<Mycontest />}></Route>
          <Route path="/matchinfo" element={<MathInfo />}></Route>
          <Route path="/matches/:id" element={<Team />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/search/:id" element={<PlayerDetails />}></Route>
          <Route path="/live" element={<LivePage />}></Route>
          <Route path="/score" element={<Score />}></Route>
          <Route path="/scorecard" element={<ScoreCard />}></Route>
          <Route path="/commentry" element={<Commentary />}></Route>
          <Route path="/playingxi" element={<PlayingXI />}></Route>
          <Route path="/pointtable" element={<PonitTable />}></Route>
        </Routes>
      </>
    </ChakraProvider>
  );
}

export default App;
