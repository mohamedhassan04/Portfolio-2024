import React, { useState } from "react";
import "./Navbar.css";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import NavMobile from "./NavMobile/NavMobile";

const Navbar = ({ setLanguage, content, language }) => {
  /* State to open and close mobile navbar */

  const [isOpen, setIsOpen] = useState(false);

  /* Function to open and close */
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavMobile isOpen={isOpen} toggleMenu={toggleMenu} content={content} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <div className="header">
            <img src="./assets/img11.png" className="logo" alt="logo" />{" "}
            <h3>Mohamed Hassan</h3>
          </div>
          <ul>
            <li>
              <a className="menu-item" href="#home">
                {content.home}
              </a>
            </li>
            <li>
              <a className="menu-item" href="#skills">
                {content.skills}
              </a>
            </li>
            <li>
              <a className="menu-item" href="#experience">
                {content.workExperience}
              </a>
            </li>
            <li>
              <a className="menu-item" href="#contact">
                {content.contact}
              </a>
            </li>

            <select
              className="select-language"
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
              }}
            >
              <option value="french">Fr</option>
              <option value="english">En</option>
            </select>

            <button className="contact-btn">
              <a href="CV.pdf" download="CV.pdf">
                {content.download}
              </a>
            </button>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span style={{ fontSize: "1.8rem" }}>
              {isOpen ? <IoMdClose /> : <CiMenuBurger />}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
