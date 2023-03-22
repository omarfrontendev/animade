import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { Button } from "../";
import styles from "./.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          <img className={styles.logo__img} src={Logo} alt="logo" />
        </Link>
        <div className={styles.left__nav}>
          <ul className={styles.links__list}>
            <li>
              <Link to="/">How it Works</Link>
            </li>
            <li>
              <Link to="/">Pricing</Link>
            </li>
            <li>
              <Link to="/">Log In</Link>
            </li>
          </ul>
          <Button to="/">Get Started</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
