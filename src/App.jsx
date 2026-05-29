import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const Integrity = React.lazy(() => import("./components/Integrity"));
const Error = React.lazy(() => import("./components/Error"));

function App() {
  return (
    <Router>
      <main className="min-h-screen flex flex-col relative">
        <Nav />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/integritet" element={<Integrity />} />
            <Route path="/om-oss" element={<About />} />
            <Route path="/kontakta-oss" element={<Contact />} />
            <Route path="*" element={<Error />} />{" "}
          </Routes>
        </div>

        <Footer />
      </main>
    </Router>
  );
}

export default App;
