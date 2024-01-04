import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form-content">
      <img src="./assets/img10.png" alt="contact" />
      <form>
        <div className="name-container">
          <input type="text" name="firstname" placeholder="Nom" required />
          <input type="text" name="lastname" placeholder="Prénom" required />
        </div>
        <input type="email" name="email" placeholder="Email" required />
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          rows={3}
          required
        />

        <button>Envoyer</button>
      </form>
    </div>
  );
};

export default ContactForm;
