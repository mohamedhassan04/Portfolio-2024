import React from "react";
import "./NavMobile.css";

const NavMobile = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <h1 className="logo">MH Design</h1>
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
        </div>
      </div>
    </>
  );
};

export default NavMobile;
