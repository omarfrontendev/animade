import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/sLogo.png";
import { SidebarLinks } from "../../utils/data";
import styles from "./.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__content}>
        <Link to="/" className={styles.logo}>
          <img src={Logo} alt="logo" />
        </Link>
        <div className={styles.list}>
          {SidebarLinks.map((link, i) => (
            <Link to={link.to || ""} key={i} className={styles.link}>
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
