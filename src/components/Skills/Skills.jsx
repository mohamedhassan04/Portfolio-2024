import React, { useState } from "react";
import "./Skills.css";
import SkillCard from "./SkillCard/SkillCard";
import { SKILLS } from "../../utils/data";
import SkillCardInfo from "./SkillCardInfo/SkillCardInfo";

const Skills = ({ content }) => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section className="skills-container" id="skills">
      <h5>{content.technicalSkills}</h5>
      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => (
            <SkillCard
              key={item.title}
              iconUrl={item.icon}
              content={content}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => {
                handleSelectSkill(item);
              }}
            />
          ))}
        </div>
        <div className="skills-info">
          <SkillCardInfo
            content={content}
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
