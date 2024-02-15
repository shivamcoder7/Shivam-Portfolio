import React from "react";
import "./Header.css";
// import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="container">
      <div className="header_name">
        <h1>SHIVAM RAJPUT</h1>
      </div>
      <div className="header">
        <div className="profile_options_left">
          <a href="https://www.linkedin.com/in/shivam-rajput-181675204/" target="_blank">
            <span>Linkedin</span>
          </a>
          <a href="https://www.linkedin.com/in/shivam-rajput-181675204/" target="_blank">
            <span>Twitter</span>
          </a>
          <a href="https://www.instagram.com/shivamrajput9561/" target="_blank">
            <span>Instagram</span>
          </a>
        </div>
        <div className="image">
          <img src="/images/Manali_Pic.jpeg" alt="Shivam_Image" />
        </div>
        <div className="profile_options_right">
          <a href="./About.js" target="_blank"><span>About</span></a>
          <span>Blogs</span>
          <span>Contact</span>
        </div>
      </div>
      {/* <div className="description">
        <h1>Shivam Rajput</h1>
        <p>Final Year Undergraduate Student in IIT Delhi</p>
        <p>I am a Competitive Programmer and a Web Developer</p>
      </div> */}
      <hr />
    </div>
  );
}

export default Header;
