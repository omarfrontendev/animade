import React from "react";
import { BsCheck } from "react-icons/bs";
import styles from "./.module.scss";

const CheckBox = ({ label, value }) => {
  return (
    <div className={styles.checkbox}>
      <input type="checkbox" id={value} value={value} />
      <label htmlFor={value} className={styles.checkbox__label}>
        <BsCheck className={styles.icon} />
      </label>
      <label htmlFor={value} className={styles.label__text}>
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
