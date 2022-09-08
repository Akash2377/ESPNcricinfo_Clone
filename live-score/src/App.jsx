import './App.css';
import { Routes, Route } from "react-router-dom";

import { Navbar } from './components/navbar';
import { Commentary } from "./components/commentry";
import { PlayingXI } from "./components/playing";
import { ScoreCard } from "./components/scorecard";
import { PonitTable } from "./components/pointTable";
import { Score } from './components/score';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Score/>}></Route>
        <Route path='/scorecard' element={<ScoreCard/>}></Route>
        <Route path='/commentry' element={<Commentary/>}></Route>
        <Route path='/playingxi' element={<PlayingXI/>}></Route>
        <Route path='/pointtable' element={<PonitTable/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
