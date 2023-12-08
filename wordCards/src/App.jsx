import "./App.css";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Games from "./pages/games/Games";
import Repeat from "./pages/repeat/Repeat";
import Profile from "./pages/profile/Profile";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" index element={<Home></Home>}></Route>
//         <Route path="/games" element={<Games></Games>}></Route>
//         <Route path="/repeat" element={<Repeat></Repeat>}></Route>
//         <Route path="/profile" element={<Profile></Profile>}></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" index element={<Home />}>
      <Route path="/games" element={<Games></Games>}></Route>
      <Route path="/repeat" element={<Repeat></Repeat>}></Route>
      <Route path="/profile" element={<Profile></Profile>}></Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
