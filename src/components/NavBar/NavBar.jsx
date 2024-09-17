import React from 'react'
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div>
    <nav className="{`${styles.NavBar} container`}" >
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
    </nav>
    </div>
  );
}

export default NavBar
