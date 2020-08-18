import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import Main from "./pages/Main.js";

import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";

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

  const isMobileSize = useMediaQuery({
    query: "(max-device-width: 768px)",
  });

  return (
    <Router>
      <NavBar mobile={isMobileSize} transparent={navBackground} />
      <main style={{ height: "100%" }}>
        <Main mobile={isMobileSize} />
      </main>
      <Footer transparent={navBackground} />
    </Router>
  );
}

export default App;
