import React from "react";
import styles from "./.module.scss";

const Input = ({ type, placeholder }) => {
  if (type === "textarea")
    return (
      // <div className={styles.textarea}>
      <textarea className={styles.textarea} placeholder={placeholder} />
      // </div>
    );
  return (
    <div className={styles.input}>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
