import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <table className="Navbar_options">
        <tr>
          <td>Home</td>
          <td>About</td>
          <td>Contacts</td>
          <td>Blogs</td>
        </tr>
      </table>
    </header>
  );
}

export default Navbar;
