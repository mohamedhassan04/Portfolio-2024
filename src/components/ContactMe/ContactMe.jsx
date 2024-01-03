import React from "react";
import "./ContactMe.css";
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            text="mohamedhassan.contact@gmail.com"
            iconUrl={<CiMail />}
          />
          <ContactInfoCard
            link={
              <a href="https://www.linkedin.com/in/mohamed-hassen-856063106/">
                Linkedin | Mohamed Hassen
              </a>
            }
            iconUrl={<FaLinkedin />}
          />
          <ContactInfoCard
            link={
              <a href="https://github.com/mohamedhassan04">
                GitHub | mohamedhassan04
              </a>
            }
            iconUrl={<FaGithub />}
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
