import React from "react";
import { Button, CardsList, FooterBtns } from "../../components";
import { RocketIcon } from "../../icons";
import DefaultImage from "../../assets/profile.png";
import styles from "./.module.scss";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <div className={styles.page}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <div className={styles.user__details}>
              <img
                src={DefaultImage}
                alt="user__image"
                className={styles.user__image}
              />
              Hello, {user?.username || "User"}
            </div>
            <div className={styles.rigth__header}>
              <Button to="/pricing">Upgrade</Button>
              <div className={styles.rocket__box}>
                <span className={styles.design}>30 designs</span>
                <RocketIcon />
              </div>
            </div>
          </nav>
        </header>
        <div className={styles.content}>
          <h3 className="section__title">Past Designs (2 Months)</h3>
          <CardsList list={new Array(8).fill("")} />
        </div>
      </div>
      <FooterBtns>
        <div>
          <Button to="/">Create Products</Button>
        </div>
      </FooterBtns>
    </>
  );
};

export default Profile;
