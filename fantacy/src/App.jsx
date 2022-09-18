import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Matches from "./components/match/matches";
// import Legue from './components/legue/legue';
import Home from "./components/home/home";
// import Contest from './components/Contest/Contest';
import Team from "./components/teampage/team";
import Mycontest from "./components/mycontest/mycontest";
import Navbar from "./components/Fantacy-navbar/Navbar";
import Signup from "./components/login/Signup";
import Login from "./components/login/Login";
import Sideimg from "./components/sideimg/Sideimg";

function App() {
  return (
    <div className="App">
      <Box display="flex">
        <Sideimg />
        <Navbar></Navbar>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path="/matches" element={<Matches />}></Route>
          <Route path="/mycontest" element={<Mycontest />}></Route>

          <Route path="/matches/:id" element={<Team />}></Route>
        </Routes>
      </Box>
    </div>
  );
}

export default App;
