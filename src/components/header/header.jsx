import React from "react";
import styles from "../header/header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>
        One ring to rule them all, one ring to find them, One ring to bring them
        all and in the darkness bind them.
      </h1>
      <li className={styles.li_link}>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/Table">Table</Link>
      </li>
      <li>
        <Link to="/about-us">About Us</Link>
      </li>
    </div>
  );
};

export default Header;
