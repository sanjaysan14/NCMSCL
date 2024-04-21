import React, { useState } from "react";
import "../Stylesheets/ContactPopup.css";
import axios from "axios";
import Contactimg from "../Images/Contactimg.png";
import ContactMail from "../Images/ContactMail.gif";
const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://formspree.io/f/mayrlgng", formData);
      alert("Mail sent successfully!");
      // Reset form data
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert("An error occurred while sending the mail.");
    }
  };

  return (
    <div>
      <button className="Contact_btn" onClick={togglePopup}>
        Contact
      </button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <div className="Contact_Container_Popup">
              <div className="Contact_Left_Popup">
                <img className="Contact_img" src={Contactimg} alt="" />
              </div>
              <div className="Contact_Left_Right">
                <img src={ContactMail} alt="" />

                <form onSubmit={handleSubmit} className="form">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <textarea
                    className="TextArea"
                    name="message"
                    rows="8"
                    cols="40"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
            <button className="Contact_btn" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPopup;
