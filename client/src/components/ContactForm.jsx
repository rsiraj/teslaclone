import React, { useState } from "react";
import "./ContactForm.scss";
import axios from "axios";

const ContactForm = () => {
  const [fName, setFName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [lName, setLName] = useState("");
  const [phone, setPhone] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    console.log(fName, email, message, lName, phone);
    axios
      .post("http://localhost:8000/contact", {
        fName: fName,
        lName: lName,
        email: email,
        message: message,
        phone: phone,
      })
      .then(() => {
        alert("success");
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <div className="contactHeader">
      <h1 className="sectionTitle">Contact</h1>
      <nav className="sectionNav">
        <ol>
          <li>About</li>
          <li>Careers</li>
          <li>Contact</li>
          <li>Legal</li>
          <li>Investors</li>
          <li>Suppliers</li>
        </ol>
      </nav>
      <hr />
      <div className="contactInfo">
        <h2>Sales</h2>
        <p>Visit our Find Us page to locate your nearest Tesla Store.</p>
        <h2>Careers</h2>
        <p>
          Visit our Careers page for a list of current employment opportunites.
        </p>
        <h2>Press</h2>
        <p>Visit our Find Us page to locate your nearest Tesla Store</p>
        <div className="formHeader">
          <form className="contact_form" action="">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              onChange={(e) => {
                setFName(e.target.value);
              }}
            />
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              onChange={(e) => {
                setLName(e.target.value);
              }}
            />
            <label htmlFor="">Contact Preference</label>
            <select name="contact_preference" id="contact_preference">
              <option value="phone">Phone</option>
              <option value="email">Email</option>
            </select>
            <label htmlFor="">Phone Number</label>
            <input
              type="number"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <label htmlFor="">Email</label>
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="">First Name</label>
            <input type="text" />
            <label htmlFor="">Zipcode</label>
            <input type="number" />
            <label htmlFor="">Region</label>
            <select name="region" id="region">
              <option value="phone">Phone</option>
              <option value="email">Email</option>
            </select>
            <label htmlFor="">Topic</label>
            <select name="topic" id="topic">
              <option value="order">
                Ordering a Tesla Powerwall or Solar Roof
              </option>
              <option value="installer">
                Becoming a Tesla Energy Products Certified installer
              </option>
            </select>
            <label htmlFor="">Question/Comment</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
            <button onClick={handleForm}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
