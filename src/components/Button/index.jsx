import React from "react";
import { Link } from "react-router-dom";
import styles from "./.module.scss";

const Button = ({ children, to, color, type, onClick, loading }) => {
  if (type === "button" || type === "submit")
    return (
      <button
        type={type || ""}
        onClick={onClick ? () => onClick() : () => {}}
        disabled={loading}
        className={`${styles.button} ${
          color === "purple"
            ? styles.purple
            : color === "gray"
            ? styles.gray
            : ""
        }`}
      >
        {loading ? <span className="spinner"></span> : children}
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
