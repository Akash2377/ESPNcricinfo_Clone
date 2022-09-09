import { Route, Routes } from "react-router-dom";
import "./App.css";
import LivePage from "./pages/LivePage/LivePage";

import PlayerDetails from "./pages/search/PlayerDetails";
import Search from "./pages/search/Search";

function App() {
  return (
    <>
      <Routes>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/search/:id" element={<PlayerDetails />}></Route>
        <Route path="/live" element={<LivePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
