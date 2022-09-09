import './App.css';
import { Routes, Route } from "react-router-dom";


import { Navbar } from './components/liveScore/navbar';
import { Commentary } from "./components/liveScore/commentry";
import { PlayingXI } from "./components/liveScore/playing";
import { ScoreCard } from "./components/liveScore/scorecard";
import { PonitTable } from "./components/liveScore/pointTable";
import { Score } from './components/liveScore/score';

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
