import React from "react";
import fblogo from "../logo/002-facebook.png";
import iglogo from "../logo/001-instagram.png";
import fllogo from "../logo/004-flickr.png";
import "../style/contact.css";

function ContactForm() {
  return (
    <div className="contact">
      <div>
        For inquiries send me an email at{" "}
        <a href="mailto:bjornpanker@hotmail.com">bjornpanker@hotmail.com</a> or
        use the form below.
      </div>
      <div className="social-media">
        <div>You can also find me on social media.</div>
        <div className="sm-icons">
          <a href="https://www.instagram.com/suchowolamedia/">
            <img src={iglogo} alt="instagram" />
          </a>
          <a href="https://www.facebook.com/SuchowolaMedia">
            <img src={fblogo} alt="facebook" />
          </a>
          <a href="https://www.flickr.com/photos/suchowola/">
            <img src={fllogo} alt="facebook" />
          </a>
        </div>
      </div>
      <div className="send-form">
        <form className="contact-form">
          <input type="text" name="user-name" placeholder="Name" />
          <input type="email" name="user-email" placeholder="Email" />
          <textarea
            name="message"
            placeholder="Type your message here"
          ></textarea>
          <button className="send-button">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
