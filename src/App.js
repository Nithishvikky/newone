import React from "react";
import { D6 } from "./CC2/D6";
import D7 from "./CC2/D7";
import { D8 } from "./CC2/D8";
import D10 from "./CC2/D10";
import { Home } from "./CC2/Home";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Singer } from "./CC2/Singer";
import { Album } from "./CC2/Album";

function App() {
  return (
   /*<D10/>*/
    <BrowserRouter>
      <ul className="navbar1">
        <li className="nav-item1">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item1">
          <Link to="/d6">D6</Link>
        </li>
        <li className="nav-item1">
          <Link to="/d7">D7</Link>
        </li>
        <li className="nav-item1">
          <Link to="/d8">D8</Link>
        </li>
        <li className="nav-item1">
          <Link to="/singer">Singer</Link>
        </li>
        <li className="nav-item1">
          <Link to="/album">Album</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/d6" element={<D6 />}></Route>
        <Route path="/d7" element={<D7 />}></Route>
        <Route path="/d8" element={<D8 />}></Route>
        <Route path="/singer" element={<Singer />}></Route>
        <Route path="/album" element={<Album />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
