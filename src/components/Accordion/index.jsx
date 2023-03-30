import React from "react";
import styles from "./.module.scss";

const Accordion = ({ children }) => {
  return (
    <div className={styles.accordion}>
      <div className={styles.accordion__header}>{children}</div>
    </div>
  );
};

export default Accordion;
