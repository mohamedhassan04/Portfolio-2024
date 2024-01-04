import React from "react";
import "./ContactInfoCard.css";

const ContactInfoCard = ({ iconUrl, text, link }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <span>{iconUrl}</span>
      </div>
      <p>{text}</p>
      <a href={link}>{link}</a>
    </div>
  );
};

export default ContactInfoCard;
