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
      .post("http://c9tesla.com:8000/contact", {
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
    <section className="contactHeader">
      <div>
        <h1 className="sectionTitle">Contact</h1>
        <nav className="sectionNav">
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Legal</li>
            <li>Investors</li>
            <li>Suppliers</li>
          </ul>
        </nav>
        <hr />
      </div>
      <div className="contactInfoContainer">
        <div className="contactInfo">
          <h3>Sales</h3>
          <p>Visit our Find Us page to locate your nearest Tesla Store.</p>
          <h3>Customer Support & Roadside Assistance</h3>
          <p>
            Visit our Support page to find answers and learn about our products.
          </p>
          <p>Emergency Roadside Assistance:</p>
          <p>International phone numbers</p>
          <p>Safety recall information</p>
        </div>
        <div className="contactInfo">
          <h3>Careers</h3>
          <p>
            Visit our Careers page for a list of current employment
            opportunites.
          </p>
          <h3>First Responders</h3>
          <p>
            Visit our first responders page to download Tesla reference guides
            for emergency personnel.
          </p>
        </div>
        <div className="contactInfo">
          <h3>Press</h3>
          <p>North America Press@tesla.com</p>
          <p>Europe & Middle East EUPress@tesla.com</p>
          <p>Australia and Asia APACPress@tesla.com</p>
          <p>China China-Press@tesla.com</p>
        </div>
      </div>
      <div className="formHeader">
        <h3>Submit a question or comment</h3>
        <p>Many common questions are answered on our Blog and Support pages.</p>
        <form className="contact_form" action="">
          <div className="contact_form_info">
            <div className="input_info">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                onChange={(e) => {
                  setFName(e.target.value);
                }}
              />
            </div>
            <div className="input_info">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                onChange={(e) => {
                  setLName(e.target.value);
                }}
              />
            </div>
            <div className="input_info">
              <label htmlFor="">Contact Preference</label>
              <select name="contact_preference" id="contact_preference">
                <option value="phone">Phone</option>
                <option value="email">Email</option>
              </select>
            </div>
            <div className="input_info">
              <label htmlFor="">Phone Number</label>
              <input
                type="number"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div className="input_info">
              <label htmlFor="">Email</label>
              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="input_info">
              <label htmlFor="">Zipcode</label>
              <input type="number" />
            </div>
            <div className="input_info">
              <label htmlFor="">Region</label>
              <input type="text" />
            </div>
          </div>
          <div className="question_info">
            <div className="input_info">
              <label htmlFor="">Topic</label>
              <select name="topic" id="topic">
                <option value="order">
                  Ordering a Tesla Powerwall or Solar Roof
                </option>
                <option value="installer">
                  Becoming a Tesla Energy Products Certified installer
                </option>
              </select>
            </div>
            <div className="input_info">
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
            </div>
          </div>
          <div className="hidden_btn"></div>
          <button className="input_info_btn" onClick={handleForm}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
