import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/sLogo.png";
import { SidebarLinks } from "../../utils/data";
import { FiSettings } from "react-icons/fi";
import styles from "./.module.scss";

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className={styles.sidebar}>
      <button className={styles.toggle__btn}>
        <FiSettings />
      </button>
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
