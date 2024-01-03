import React, { useState } from "react";
import "./Navbar.css";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import NavMobile from "./NavMobile/NavMobile";

const Navbar = () => {
  /* State to open and close mobile navbar */

  const [isOpen, setIsOpen] = useState(false);

  /* Function to open and close */
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavMobile isOpen={isOpen} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <div className="header">
            <img src="./assets/img11.png" className="logo" alt="logo" />{" "}
            <h3>Mohamed Hassan</h3>
          </div>
          <ul>
            <li>
              <a className="menu-item">Acceuil</a>
            </li>
            <li>
              <a className="menu-item">Compétences</a>
            </li>
            <li>
              <a className="menu-item">Expérience</a>
            </li>
            <li>
              <a className="menu-item">Contact</a>
            </li>

            <button className="contact-btn" onClick={() => {}}>
              M'embaucher
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
