import React from "react";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import {
  privacyBoxprags,
  privacyListOne,
  privacyListTwo,
} from "../../utils/data";
import styles from "./.module.scss";

const Privacy = () => {
  const navigate = useNavigate();
  const [currentActive, setCurrentActive] = useState(null);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <button className={styles.back__btn} onClick={() => navigate(-1)}>
          <IoIosArrowBack />
        </button>
        <Link to="/" className={styles.logo}>
          <img src={Logo} alt="logo" />
          Legal Information
        </Link>
      </header>
      <div className={styles.content}>
        {/* <div className={styles.box}>
          <button className={styles.box__header}>Terms & Conditions</button>
          <div className={styles.box__details}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis magnam neque obcaecati inventore harum? Voluptatem
            officiis accusamus voluptas minima vel sunt sequi, nisi labore
            consectetur quo, repellat amet, aperiam rerum.
          </div>
        </div> */}
        <div className={styles.box}>
          <button
            className={styles.box__header}
            onClick={() =>
              currentActive !== 1 ? setCurrentActive(1) : setCurrentActive(null)
            }
          >
            Privacy Policy
          </button>
          {currentActive === 1 && (
            <div className={styles.box__details}>
              <p className={styles.details__title}>
                Last updated March 23, 2023
              </p>
              <div className={styles.box__prags}>
                {privacyBoxprags.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className={styles.list}>
                <p>1. Account Creation and Use</p>
                <ul>
                  {privacyListOne.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.list}>
                <p>2. Pricing and Design Packages</p>
                <ul>
                  {privacyListTwo.map((li, i) => {
                    if (li.list) {
                      return (
                        <li key={i}>
                          {li.text}
                          <ul>
                            {li.list.map((liOfLi, index) => (
                              <li key={index}>{liOfLi}</li>
                            ))}
                          </ul>
                        </li>
                      );
                    } else {
                      return <li key={i}>{li.text}</li>;
                    }
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Privacy;
