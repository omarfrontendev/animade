import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Sidebar } from "../../components";
import styles from "./.module.scss";

const UserLayout = ({ noHeader }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.main__content}>
        {!noHeader && (
          <header className={styles.header}>
            <nav className={styles.list}>
              <NavLink
                to="/single-input"
                className={`${styles.link} ${styles.active}`}
              >
                <span>Single Input</span>
              </NavLink>
              <NavLink to="/" className={`${styles.link}`}>
                <span> List Input</span>
              </NavLink>
              <NavLink to="/image-input" className={`${styles.link}`}>
                <span> List Input</span>
              </NavLink>
              <NavLink to="/ask-ai" className={`${styles.link}`}>
                <span>Ask AI</span>
              </NavLink>
            </nav>
          </header>
        )}
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
