import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav"; // Importera Naven
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Integrity from "./components/Integrity";

function App() {
  return (
    <Router>
      <main className="min-h-screen flex flex-col relative">
        {" "}
        {/* La till relative här för säkerhets skull */}
        {/* Naven ligger högst upp och syns alltid */}
        <Nav />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/integritet" element={<Integrity />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
