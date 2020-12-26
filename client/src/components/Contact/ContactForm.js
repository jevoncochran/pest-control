import React from "react";
import "./Contact.scss";

const ContactForm = () => {
  return (
    <div>
      <form className="contact-form" onSubmit={null}>
        <div className="contact-input-div">
          <p className="contact-form-label">Name:</p>
          <div className="contact-name-input-div">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              className="contact-input contact-input-name"
              onChange={null}
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              className="contact-input contact-input-name"
              onChange={null}
            />
          </div>
        </div>
        <div className="contact-input-div">
          <p className="contact-form-label">Email Address:</p>
          <input
            type="text"
            name="email"
            className="contact-input"
            onChange={null}
          />
        </div>
        <div className="contact-input-div">
          <p className="contact-form-label">Phone Number:</p>
          <input
            type="text"
            name="phone_number"
            className="contact-input"
            onChange={null}
          />
        </div>
        <div className="contact-input-div">
          <p className="contact-form-label">Subject:</p>
          <input
            type="text"
            name="subject"
            className="contact-input"
            onChange={null}
          />
        </div>
        <div className="contact-input-div">
          <p className="contact-form-label">Message:</p>
          <input
            type="text"
            name="message"
            className="contact-input contact-msg-input"
            onChange={null}
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
