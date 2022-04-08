import React from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <section className="contactHeader">
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
          <p>Visit our Careers page for a list of current employment opportunites.</p>
          <h2>Press</h2>
          <p>Visit our Find Us page to locate your nearest Tesla Store</p>
        <div className="formHeader">
          <form className="contact_form" action=""></form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
