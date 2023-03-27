import React from "react";
import styles from "./.module.scss";

const HeaderSettings = ({ title }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {title}
        <div className={styles.header__links}>
          <span>Currency</span>
          <span>GBP £</span>
        </div>
      </nav>
    </header>
  );
};

export default HeaderSettings;
