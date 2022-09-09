import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Matches from "./components/match/matches";
// import Legue from './components/legue/legue';
import Home from "./components/home/home";
// import Contest from './components/Contest/Contest';
import Team from "./components/teampage/team";
import Mycontest from "./components/mycontest/mycontest";
import Navbar from "./components/Fantacy-navbar/Navbar";
import Signup from "./components/login/Signup";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/matches" element={<Matches />}></Route>
        <Route path="/mycontest" element={<Mycontest />}></Route>

        <Route path="/matches/:id" element={<Team />}></Route>
      </Routes>
    </div>
  );
}

export default App;
