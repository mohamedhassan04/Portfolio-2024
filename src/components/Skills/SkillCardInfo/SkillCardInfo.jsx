import React from "react";
import "./SkillCardInfo.css";

const SkillCardInfo = ({ heading, skills }) => {
  return (
    <div className="skills-card-info">
      <h6>{heading}</h6>
      <div className="skills-info-content">
        {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>
            <div className="skill-info">
              <p>{item.skill}</p>
            </div>
            <div className="skill-progress"></div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SkillCardInfo;
