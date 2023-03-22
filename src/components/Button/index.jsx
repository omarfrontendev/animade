import React from "react";
import { Link } from "react-router-dom";
import styles from "./.module.scss";

const Button = ({ children, to }) => {
  return (
    <Link to={to || ""} className={styles.button}>
      {children}
    </Link>
  );
};

export default Button;
