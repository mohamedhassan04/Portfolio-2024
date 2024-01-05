import React, { useRef } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p0hew3c",
        "template_4ijnclb",
        form.current,
        "user_iRyFgIPdirDemrF3xnvPo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-form-content">
      <img src="./assets/img10.png" alt="contact" />
      <form ref={form} onSubmit={sendEmail}>
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

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default ContactForm;
