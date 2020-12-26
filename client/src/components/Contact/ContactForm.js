import React, { useState, useEffect } from "react";
import "./Contact.scss";
import { sendInquiry } from "./sendInquiry";

const ContactForm = () => {
  const [inquiry, setInquiry] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    subject: "",
    message: "",
  });

  const handleChanges = (e) => {
    setInquiry({
      ...inquiry,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    console.log("inquiry: ", inquiry);
  }, [inquiry]);

  return (
    <div>
      <form className="contact-form" onSubmit={sendInquiry}>
        <div className="contact-input-div">
          <p className="contact-form-label">Name:</p>
          <div className="contact-name-input-div">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              className="contact-input contact-input-name"
              onChange={handleChanges}
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              className="contact-input contact-input-name"
              onChange={handleChanges}
            />
          </div>
        </div>
        <div className="contact-input-div">
          <p className="contact-form-label">Email Address:</p>
          <input
            type="text"
            name="email"
            className="contact-input"
            onChange={handleChanges}
          />
        </div>
        <div className="contact-input-div">
          <p className="contact-form-label">Phone Number:</p>
          <input
            type="text"
            name="phone_number"
            className="contact-input"
            onChange={handleChanges}
          />
        </div>
        <div className="contact-input-div">
          <p className="contact-form-label">Subject:</p>
          <input
            type="text"
            name="subject"
            className="contact-input"
            onChange={handleChanges}
          />
        </div>
        <div className="contact-input-div">
          <p className="contact-form-label">Message:</p>
          <input
            type="text"
            name="message"
            className="contact-input contact-msg-input"
            onChange={handleChanges}
          />
        </div>
        <button type="submit" className="contact-submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
