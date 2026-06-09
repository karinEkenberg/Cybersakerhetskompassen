import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import NavCompass from "../assets/nav-compass-image.webp";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkStyle = ({ isActive }) =>
    `hover:text-black pb-1 transition-all duration-100 ${
      isActive
        ? "border-b-2 border-[#2b2b2b] text-black font-semibold"
        : "text-gray-700"
    }`;

  return (
    <nav className="sticky top-0 left-0 w-full z-50 px-6 py-3 bg-[var(--color-offwhite)] shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        <Link to="/" className="flex items-center gap-2 z-50">
          <img
            src={NavCompass}
            alt="Cybersäkerhetskompassen"
            className="w-10 md:w-12 object-contain"
            width="48"
            height="48"
          />
        </Link>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 items-center font-medium">
          <NavLink to="/" className={linkStyle}>
            Hem
          </NavLink>
          <NavLink to="/matchmaking" className={linkStyle}>
            Matchmaking
          </NavLink>
          <NavLink to="/roadmaps" className={linkStyle}>
            Roadmaps
          </NavLink>
          <NavLink to="/roller" className={linkStyle}>
            Roller
          </NavLink>
          <NavLink to="/lexikon" className={linkStyle}>
            Lexikon
          </NavLink>
          <NavLink to="/labbar" className={linkStyle}>
            Labbar
          </NavLink>
          <NavLink to="/natverk" className={linkStyle}>
            Nätverk
          </NavLink>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-8 h-[3px] bg-[#2b2b2b] rounded transition-transform duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-[9px]" : ""}`}
          ></span>
          <span
            className={`block w-8 h-[3px] bg-[#2b2b2b] rounded transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className={`block w-8 h-[3px] bg-[#2b2b2b] rounded transition-transform duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}
          ></span>
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[var(--color-offwhite)] shadow-lg transition-all duration-300 ease-in-out overflow-hidden flex flex-col items-center gap-6 ${
          isOpen
            ? "max-h-[500px] opacity-100 py-8 pointer-events-auto"
            : "max-h-0 opacity-0 py-0 pointer-events-none"
        }`}
      >
        <NavLink
          to="/"
          onClick={toggleMenu}
          className={linkStyle + " w-full text-center"}
        >
          Hem
        </NavLink>
        <NavLink
          to="/roller"
          onClick={toggleMenu}
          className={linkStyle + " w-full text-center"}
        >
          Roller
        </NavLink>
        <NavLink
          to="/roadmaps"
          onClick={toggleMenu}
          className={linkStyle + " w-full text-center"}
        >
          Roadmaps
        </NavLink>
        <NavLink
          to="/lexikon"
          onClick={toggleMenu}
          className={linkStyle + " w-full text-center"}
        >
          Lexikon
        </NavLink>
        <NavLink
          to="/matchmaking"
          onClick={toggleMenu}
          className={linkStyle + " w-full text-center"}
        >
          Matchmaking
        </NavLink>
        <NavLink
          to="/labbar"
          onClick={toggleMenu}
          className={linkStyle + " w-full text-center"}
        >
          Labbar
        </NavLink>
        <NavLink
          to="/natverk"
          onClick={toggleMenu}
          className={linkStyle + " w-full text-center"}
        >
          Nätverk
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
