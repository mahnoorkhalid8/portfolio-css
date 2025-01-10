"use client";

import React from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); //menu close/open
  };

  const closeMenu = () => {
    setIsMenuOpen(false); //menu close
  };

  return (
    <div className="navbar-sec">
      <div className="nav-logo">
        <div className="nav">
          <img src="logo1.png" alt="logo" className="nav-img" />
          <h6 className="nav-h">MK</h6>
        </div>
        <ul className="nav-links">
          <li className="nav-link">
            <a href="#hero" onClick={closeMenu}>
              Home
            </a>
          </li>

          <li className="nav-link">
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>

          <li className="nav-link">
            <a href="#project" onClick={closeMenu}>
              Projects
            </a>
          </li>

          <li className="nav-link">
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>

          <li className="nav-link">
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>

    {/* mobile menu icon */}
        <div className="nav-mob-menu" onClick={toggleMenu}>
          {isMenuOpen ? <RxCross1 size={30} /> : <TfiMenuAlt size={30} />}
        </div>
      </div>

      {isMenuOpen && (
        <ul className={`nav-mob-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="nav-link">
            <a href="#hero" onClick={closeMenu}>
              Home
            </a>
          </li>

          <li className="nav-link">
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>

          <li className="nav-link">
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>

          <li className="nav-link">
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>

          <li className="nav-link">
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
