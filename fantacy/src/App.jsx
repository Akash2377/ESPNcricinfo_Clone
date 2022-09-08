import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Matches from "./components/match/matches";
// import Legue from './components/legue/legue';
import Home from "./components/home/home";
// import Contest from './components/Contest/Contest';
import Team from "./components/teampage/team";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/matches" element={<Matches />}></Route>

        <Route path="/matches/:id" element={<Team />}></Route>
      </Routes>
    </div>
  );
}

export default App;
