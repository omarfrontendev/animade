import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { Button } from "../";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "./.module.scss";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          <img className={styles.logo__img} src={Logo} alt="logo" />
        </Link>
        <div className={styles.left__nav}>
          <ul
            className={`${styles.links__list} ${openMenu ? styles.open : ""}`}
          >
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
          <button
            className={styles.toggle__menu}
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            {openMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
          <Button to="/">Get Started</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
