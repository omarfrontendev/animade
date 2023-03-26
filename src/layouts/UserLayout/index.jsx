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
                Single Input
              </NavLink>
              <NavLink to="/" className={`${styles.link}`}>
                List Input
              </NavLink>
              <NavLink to="/image-input" className={`${styles.link}`}>
                Image Input
              </NavLink>
              <NavLink to="/ask-ai" className={`${styles.link}`}>
                Ask AI
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
