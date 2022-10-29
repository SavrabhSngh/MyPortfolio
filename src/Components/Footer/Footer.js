import React from "react";
import Avatar from "@mui/material/Avatar";
import "./Footer.css";
import {
  FULL_NAME,
  RIGHTS_RESERVED,
  FACEBOOK,
  INSTAGRAM,
  LINKEDIN,
  WHATSAPP,
} from "../../Services/Constants";

const Footer = () => {
  return (
    <footer>
      <Avatar alt="avtar" src="./favicon.ico" />
      <h3>{FULL_NAME}</h3>
      <p>{RIGHTS_RESERVED}</p>
      <div className="footer-buttons">
        <button
          className="shadow"
          onClick={() => window.open(LINKEDIN, "_self")}
        >
          <i className="fab fa-linkedin-in"></i>
        </button>
        <button
          className="shadow"
          onClick={() => window.open(WHATSAPP, "_self")}
        >
          <i className="fab fa-whatsapp"></i>
        </button>
        <button
          className="shadow"
          onClick={() => window.open(INSTAGRAM, "_self")}
        >
          <i className="fab fa-instagram"></i>
        </button>
        <button
          className="shadow"
          onClick={() => window.open(FACEBOOK, "_self")}
        >
          <i className="fab fa-facebook-f"></i>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
