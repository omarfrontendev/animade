import React from "react";
import styles from "./.module.scss";

const Cell = ({ children, flex, noborder }) => {
  return (
    <div
      style={{ flex: flex }}
      className={`${styles.cell} ${noborder ? styles.noborder : ""}`}
    >
      {children}
    </div>
  );
};

export default Cell;
