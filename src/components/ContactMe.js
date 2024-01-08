/* eslint-disable no-console */
import React, { useState } from "react";
import githubIcon from "../images/icon-github.png";
import linkedinIcon from "../images/icon-linkedin.png";

import "../styles/contactme.css";

function ContactMe() {
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mrgngvkn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("Form submitted successfully!");
      setFormData(initialFormData);
    } else {
      console.error("Form submission failed.");
    }
  };

  return (
    <div className="contactme-container" id="contactme-section">
      <h2>Let&#39;s keep in touch! :)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div className="contactme-container-links">
        <a
          href="https://linkedin.com/in/joshua-kuhn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="linkedin" />
        </a>
        <a
          href="https://github.com/joshk98"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="github" />
        </a>
      </div>
      <strong>Created by Joshua Kuhn</strong>
    </div>
  );
}

export default ContactMe;
