import React from "react";
import "./SkillCardInfo.css";

const SkillCardInfo = ({ heading, skills, content }) => {
  return (
    <div className="skills-card-info">
      <h6>{content[heading]}</h6>
      <div className="skills-info-content">
        {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>
            <div className="skill-info">
              <p>{content.skills1[item.skill]}</p>
            </div>
            <div className="skill-progress"></div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SkillCardInfo;
