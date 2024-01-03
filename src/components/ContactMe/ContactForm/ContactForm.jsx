import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form-content">
      <img src="./assets/img10.png" alt="contact" />
      <form>
        <div className="name-container">
          <input type="text" name="firstname" placeholder="First Name" />
          <input type="text" name="lastname" placeholder="Last Name" />
        </div>
        <input type="email" name="email" placeholder="Email" />
        <textarea type="text" name="message" placeholder="Message" rows={3} />

        <button>Envoyer</button>
      </form>
    </div>
  );
};

export default ContactForm;
