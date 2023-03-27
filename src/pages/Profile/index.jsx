import React from "react";
import { Button, CardsList, FooterBtns } from "../../components";
import { RocketIcon } from "../../icons";
import DefaultImage from "../../assets/profile.png";
import styles from "./.module.scss";

const Profile = () => {
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
              Hello, Luca Bertuzzi
            </div>
            <div className={styles.rigth__header}>
              <Button>Upgrade</Button>
              <div className={styles.rocket__box}>
                <span className={styles.design}>10 designs</span>
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
