import React from "react";
import "./SkillCard.css";

const SkillCard = ({ title, iconUrl, isActive, onClick, content }) => {
  return (
    <div
      className={`skills-card ${isActive ? "active" : ""}`}
      onClick={() => onClick()}
    >
      <div className="skill-icon">
        <img src={iconUrl} alt={title} />
      </div>
      <span>{content[title]}</span>
    </div>
  );
};

export default SkillCard;
