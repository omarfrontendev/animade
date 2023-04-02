import React from "react";
import { Link } from "react-router-dom";
import styles from "./.module.scss";

const Button = ({ children, to, color, type, onClick }) => {
  if (type === "button")
    return (
      <button
        onClick={() => onClick()}
        className={`${styles.button} ${
          color === "purple"
            ? styles.purple
            : color === "gray"
            ? styles.gray
            : ""
        }`}
      >
        {children}
      </button>
    );
  return (
    <Link
      to={to || ""}
      className={`${styles.button} ${
        color === "purple" ? styles.purple : color === "gray" ? styles.gray : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default Button;
