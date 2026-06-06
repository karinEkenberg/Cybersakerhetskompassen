import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const Integrity = React.lazy(() => import("./components/Integrity"));
const Error = React.lazy(() => import("./components/Error"));
const Roles = React.lazy(() => import("./components/Roles"));
const Roadmap = React.lazy(() => import("./components/Roadmap"));
const Lexicon = React.lazy(() => import("./components/Lexicon"));
const Matching = React.lazy(() => import("./components/Matching"));
const Lab = React.lazy(() => import("./components/Lab"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <main className="min-h-screen flex flex-col relative">
        <Nav />

        <div className="flex-grow">
          <Suspense
            fallback={
              <div className="flex justify-center items-center py-20">
                Laddar...
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/integritet" element={<Integrity />} />
              <Route path="/om-oss" element={<About />} />
              <Route path="/kontakta-oss" element={<Contact />} />
              <Route path="/roller" element={<Roles />} />
              <Route path="/roadmaps" element={<Roadmap />} />
              <Route path="/lexikon" element={<Lexicon />} />
              <Route path="/matchmaking" element={<Matching />} />
              <Route path="/labbar" element={<Lab />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Suspense>
        </div>

        <Footer />
      </main>
    </Router>
  );
}

export default App;
