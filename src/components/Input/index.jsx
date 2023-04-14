import React from "react";
import styles from "./.module.scss";

const Input = ({ type, placeholder, onChange }) => {
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
    <div className={styles.input}>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
