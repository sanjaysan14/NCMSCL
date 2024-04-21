import React, { useState } from "react";
import axios from "axios";
import "../Stylesheets/Contact.css";
import Contactimg from "../Images/Contactimg.png";
import ContactMail from "../Images/ContactMail.gif";

export const Contact = () => {
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
    <div className="Contact_Banner">
      <h1 className="Contact_head">Touch With Us</h1>
      <div className="Contact_Container">
        <div className="Contact_Left">
          <img className="Contact_img" src={Contactimg} alt="" />
        </div>
        <div className="Contact_Right">
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
    </div>
  );
};

export default Contact;
