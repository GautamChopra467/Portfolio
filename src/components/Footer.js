import React from "react";
import "./FooterStyles.css";
import {
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left-section">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <p>Uttam Nagar, New Delhi, India</p>
          </div>
          <div className="phone">
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <p>+91-9654086265</p>
          </div>
          <div className="mail">
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <p>harshchopra467@gmail.com</p>
          </div>
        </div>

        <div className="right-section">
          <h2 style={{color: '#fff'}}>Follow Me On</h2>
          <div className="social">
            <a href="https://www.instagram.com/gautamchopra0711/?hl=en">
              <FaInstagram
                size={35}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://github.com/GautamChopra467">
              <FaGithub
                size={35}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/gautam-chopra-29b139207/">
              <FaLinkedin
                size={35}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
