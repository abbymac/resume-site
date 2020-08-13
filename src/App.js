import React, { useEffect, useState, useRef } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Main from "./pages/Main.js";
import About from "./pages/About.js";
import Interests from "./components/Interests.js";

import NavBar from "./components/NavBar.js";

function App() {
  const [navBackground, setNavBackground] = useState(false);

  const navRef = useRef();
  navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 1;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <NavBar transparent={navBackground} />
      <main style={{ height: "100%" }}>
        <Main />
      </main>
    </Router>
  );
}

export default App;
