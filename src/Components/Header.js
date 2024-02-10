import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="container">
    <div className="header">
      <div className="image">
        <img src="/images/Manali_Pic.jpeg" alt="Shivam_Image" />
      </div>
      <div className="description">
        <h1>Shivam Rajput</h1>
        <p>Final Year Undergraduate Student in IIT Delhi</p>
        <p>I am a Competetive Programmer and a Web Developer</p>
      </div>
      </div>
      <hr/>
    </div>
  );
}

export default Header;
