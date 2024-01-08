import React from "react";
import "./ExperienceCard.css";

const ExperienceCard = ({ details, content }) => {
  console.log(content.work[details.title]);
  return (
    <div className="work-experience-card">
      <h6>{details.title}</h6>
      <div className="work-company">{details.company}</div>
      <div className="work-duration">{details.date}</div>
      <ul>
        {details.responsabilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
