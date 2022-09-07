
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Matches from "./components/match/matches";
import Contest from './components/Contest/Contest';
import Team from './components/teampage/team';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/matches" element={<Matches/>} ></Route>
        <Route path="/matches/:id" element={<Team/>} ></Route>
      </Routes>
    
    </div>
  );
}

export default App;
