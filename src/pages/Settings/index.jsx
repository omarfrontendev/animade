import React from "react";
import { Link } from "react-router-dom";
import { HeaderSettings } from "../../components";
import { ManageIcon } from "../../icons";
import { settingsLinks } from "../../utils/data";
import styles from "./.module.scss";

const Settings = () => {
  const title = <h5 className={styles.title__header}>Settings</h5>;

  return (
    <div className={styles.page}>
      <HeaderSettings title={title} />
      <div className={styles.content}>
        {settingsLinks.map((link, i) => (
          <Link to={link.to} key={i} className={styles.link}>
            {link.icon}
            {link.label}
          </Link>
        ))}
        <button className={styles.link}>
          <ManageIcon />
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Settings;
