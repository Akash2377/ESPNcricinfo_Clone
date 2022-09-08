import { Route, Routes } from "react-router-dom";
import "./App.css";
import PlayerDetails from "./pages/search/PlayerDetails";
import Search from "./pages/search/Search";

function App() {
  return (
    <>
      <Routes>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/search/:id" element={<PlayerDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
