// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Integrity from "./components/Integrity"; // Importera din nya sida

function App() {
  return (
    // Router är själva systemet som lyssnar på ändringar i webbadressen
    <Router>
      <main className="min-h-screen flex flex-col">
        {/* Allt inuti flex-grow kan bytas ut beroende på vilken sida vi är på */}
        <div className="flex-grow">
          <Routes>
            {/* Om adressen är "/" (startsidan), visa Hero */}
            <Route path="/" element={<Hero />} />

            {/* Om adressen är "/integritet", visa din nya sida */}
            <Route path="/integritet" element={<Integrity />} />
          </Routes>
        </div>

        {/* Footern ligger utanför Routes, så den syns alltid på alla sidor! */}
        <Footer />
      </main>
    </Router>
  );
}

export default App;
