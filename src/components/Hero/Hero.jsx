import React from "react";
import "./Hero.css";

const Hero = ({ content }) => {
  return (
    <section className="hero-container" id="home">
      <div className="hero-content">
        <h2>{content.slogan}</h2>
        <p>{content.slogan2}</p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/img05.png" alt="" loading="lazy" />
          </div>
          <img src="./assets/img09.jpg" alt="" loading="lazy" />
        </div>

        <div>
          <div className="tech-icon">
            <img src="./assets/img06.png" alt="" loading="lazy" />
          </div>
          <div className="tech-icon">
            <img src="./assets/img07.png" alt="" loading="lazy" />
          </div>
          <div className="tech-icon">
            <img src="./assets/img08.png" alt="" loading="lazy" />
          </div>
          <div className="tech-icon">
            <img src="./assets/img12.png" alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
