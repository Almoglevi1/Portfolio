import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {

  return (
    <footer className="footer">
      <p>Almog Levi &copy; {new Date().getFullYear()}</p>
      <div className="footer-social-links">
        <a href="https://www.facebook.com/almog.levi11"  target='_blank'>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/almoglevi10/"  target='_blank'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://twitter.com/AlmogLevi71"  target='_blank'>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
