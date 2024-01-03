import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Imaginer une expérience numérique qui inspire</h2>
        <p>
          Développeur backend et Tech-lead . Passionné par le monde du web, du
          design et des nouvelles technologies, je vise à apporter ma
          contribution grâce à mes solutions créatives et innovantes.
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/img05.png" alt="" />
          </div>
          <img src="./assets/img09.jpg" alt="" />
        </div>

        <div>
          <div className="tech-icon">
            <img src="./assets/img06.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/img07.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/img08.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
