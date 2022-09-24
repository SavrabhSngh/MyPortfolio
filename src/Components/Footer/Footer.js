import React from "react";
import "./Footer.css";
import Avatar from "@mui/material/Avatar";

const Footer = () => {
  return (
    <footer>
      <Avatar alt="avtar" src="./favicon.ico" />
      <h3>SAVRABH R SINGH</h3>
      <p>All Rights Reserved | @2022</p>
      <div className="footer-buttons">
        <button className="shadow">
          <i className="fab fa-facebook-f"></i>
        </button>
        <button className="shadow">
          <i className="fab fa-whatsapp"></i>
        </button>
        <button className="shadow">
          <i className="fab fa-instagram"></i>
        </button>
        <button className="shadow">
          <i className="fab fa-linkedin-in"></i>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
