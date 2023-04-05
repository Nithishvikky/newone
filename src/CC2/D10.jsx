import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Home } from "./Home";
import { Destination } from "./D10/Destination";
import About from "./D10/About";
import { Contact } from "./D10/Contact";
import Registration from "./D10/Registration";
import Submitted from "./D10/Submitted";

export default function D10() {
  return (
    <BrowserRouter>
      <ul className="navbar1">
        <li className="nav-item1">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item1">
          <Link to="/destination">Destination</Link>
        </li>
        <li className="nav-item1">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item1">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="nav-item1">
          <Link to="/registration">Registration</Link>
        </li>
        <li className="nav-item1">
          <Link to="/submitted">Submitted</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/submitted" element={<Submitted />} />
      </Routes>
    </BrowserRouter>
  );
}
