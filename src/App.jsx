import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home"; // New import for the home page wrapper
import Integrity from "./components/Integrity";
import Error from "./components/Error";
import About from "./components/About";

function App() {
  return (
    <Router>
      <main className="min-h-screen flex flex-col relative">
        {/* Navigation bar stays at the top of every page */}
        <Nav />

        <div className="flex-grow">
          <Routes>
            {/* The main root path now loads the Home component */}
            <Route path="/" element={<Home />} />
            {/* Privacy policy and green coding statements */}
            <Route path="/integritet" element={<Integrity />} />
            <Route path="/om-oss" element={<About />} />
            <Route path="*" element={<Error />} />{" "}
            {/* Catch-all route for undefined paths */}
          </Routes>
        </div>

        {/* Footer stays at the bottom of every page */}
        <Footer />
      </main>
    </Router>
  );
}

export default App;
