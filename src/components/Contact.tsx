import React from "react";
import { IoIosMail } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className="contact-sec">
      <div className="contact-grid">
        <div className="contact-sp">
          <h1 className="contact-h">
            Contact Me
          </h1>

          <div data-aos="zoom-out">
            <p className="contact-p">
              Feel free to reach out to me for collaboration or inquiries. You
              can contact me via email, connect with me on professional
              networks, or reach me directly on phone or WhatsApp.
            </p>
          </div>
          <div className="contact-icon">
            <div>
              <IoIosMail size={30} />
              <a href="mailto:mahnoorkhalid814@gmail.com" className="icon-a">
                mahnoorkhalid814@gmail.com
              </a>
            </div>

            <div>
              <FiPhoneCall size={25} />
              <a href="tel:+92 333 2455342" className="icon-a">+92 333 2455342</a>
            </div>

            <div>
              <BsWhatsapp size={25} />
              <a href="tel:+92 333 2455342" className="icon-a">+92 333 2455342</a>
            </div>
          </div>
        </div>

        <div className="contact-sp">
            <div className="form">
              <label htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your Name"
                className="input"
                required
              />
            </div>

            <div className="form">
              <label htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="input"
                required
              />
            </div>

            <div className="form">
              <label htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={7}
                placeholder="Enter your message"
                className="textarea"
              ></textarea>
            </div>

            <button type="submit" className="button">
              Send
            </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
