import React from "react";
import { AiTwotonePhone } from "react-icons/ai";
import ContactForm from "./ContactForm";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-left-side">
        <h1 className="contact-headline">Contact Us</h1>
        <div className="contact-phone-container">
          <div className="contact-icon">
            <AiTwotonePhone />
          </div>
          <p className="contact-left-text">(586) 553-7915</p>
        </div>
        <p className="contact-left-text" style={{ marginBottom: "2%" }}>
          Feel free to send us a message by filling out the form!
        </p>
        <p className="contact-left-text">WE RESPOND QUICKLY</p>
      </div>
      <div className="contact-right-side">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
