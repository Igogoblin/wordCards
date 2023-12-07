import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Games from "./pages/games/Games";
import Repeat from "./pages/repeat/Repeat";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home></Home>}></Route>
        <Route path="/games" element={<Games></Games>}></Route>
        <Route path="/repeat" element={<Repeat></Repeat>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
