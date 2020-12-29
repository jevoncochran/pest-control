import React, { useState } from "react";
import "./Home.scss";
import { GoCheck } from "react-icons/go";
import { sendInquiry } from "../../globals/sendInquiry";

const Inquiry = () => {
  const [inquiry, setInquiry] = useState({
    name: "",
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

  return (
    <div className="home-inquiry">
      <div className="home-inquiry-sub-container">
        <div className="home-inquiry-left">
          <p className="home-inquiry-headline">HOW CAN WE HELP?</p>
          <form onSubmit={sendInquiry}>
            <div className="home-inquiry-2-input-div">
              <div className="home-inquiry-input-div">
                <p className="home-inquiry-form-label">Name:</p>
                <input
                  type="text"
                  name="name"
                  className="home-inquiry-input"
                  onChange={handleChanges}
                />
              </div>
              <div className="home-inquiry-input-div">
                <p className="home-inquiry-form-label">Email:</p>
                <input
                  type="text"
                  name="email"
                  className="home-inquiry-input"
                  onChange={handleChanges}
                />
              </div>
            </div>

            <div className="home-inquiry-2-input-div">
              <div className="home-inquiry-input-div">
                <p className="home-inquiry-form-label">Phone No:</p>
                <input
                  type="text"
                  name="phone"
                  className="home-inquiry-input"
                  onChange={handleChanges}
                />
              </div>
              <div className="home-inquiry-input-div">
                <p className="home-inquiry-form-label">Subject:</p>
                <input
                  type="text"
                  name="subject"
                  className="home-inquiry-input"
                  onChange={handleChanges}
                />
              </div>
            </div>

            <div className="home-inquiry-input-div home-inquiry-msg-input-div">
              <p className="home-inquiry-form-label">Message:</p>
              <input
                type="text"
                name="message"
                className="home-inquiry-input home-inquiry-msg-input"
                onChange={handleChanges}
              />
            </div>

            <div className="home-inquiry-form-button-div">
              <button className="home-inquiry-form-btn">SEND</button>
            </div>
          </form>
        </div>

        <div className="home-inquiry-right">
          <div className="home-inquiry-quality-container">
            <div className="home-inquiry-quality-div">
              <div className="home-inquiry-quality-icon">
                <GoCheck />
              </div>
              <p className="home-inquiry-quality-text">
                Licenced, Bonded and Insured
              </p>
            </div>
            <hr class="home-inquiry-quality-divider" />
            <div className="home-inquiry-quality-div">
              <div className="home-inquiry-quality-icon">
                <GoCheck />
              </div>
              <p className="home-inquiry-quality-text">Free Estimates</p>
            </div>
            <hr class="home-inquiry-quality-divider" />
            <div className="home-inquiry-quality-div">
              <div className="home-inquiry-quality-icon">
                <GoCheck />
              </div>
              <p className="home-inquiry-quality-text">
                100% Customer Satisfaction
              </p>
            </div>
            <hr class="home-inquiry-quality-divider" />
            <div className="home-inquiry-quality-div">
              <div className="home-inquiry-quality-icon">
                <GoCheck />
              </div>
              <p className="home-inquiry-quality-text">Fast Response</p>
            </div>
            <hr class="home-inquiry-quality-divider" />
            <div className="home-inquiry-quality-div">
              <div className="home-inquiry-quality-icon">
                <GoCheck />
              </div>
              <p className="home-inquiry-quality-text">Local Business</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
