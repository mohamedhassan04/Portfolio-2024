import React from "react";
import "./NavMobile.css";

const NavMobile = ({ isOpen, toggleMenu, content }) => {
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
            <select className="select-language" id="language" name="language">
              <option value="fr">Fr</option>
              <option value="en">En</option>
            </select>
            <button className="contact-btn" onClick={() => {}}>
              Télécharger CV
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavMobile;
