import React from "react";
import styles from "./.module.scss";

const Input = ({ type, placeholder, onChange, error }) => {
  if (type === "textarea")
    return (
      // <div className={styles.textarea}>
      <textarea
        className={styles.textarea}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
      />
      // </div>
    );
  return (
    <div className={`${styles.input} ${error ? styles.error : ""}`}>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
      />
      {error && <p className={styles.error__message}>{error}</p>}
    </div>
  );
};

export default Input;
