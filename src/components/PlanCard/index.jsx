/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { IoCaretForwardOutline } from "react-icons/io5";
import styles from "./.module.scss";

const PlanCard = ({
  title,
  subtitle,
  price,
  extra,
  designs,
  image,
  Professional,
}) => {
  return (
    <div className={styles.plan}>
      <div className={`${styles.card} ${Professional ? styles.pro : ""}`}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.image}>
          <img src={image} alt="" />
        </div>
        {Professional && (
          <h5 className={styles.pro__designs}>
            Unlimited <br />
            <span>Designs</span>
          </h5>
        )}
        {!Professional && <h5 className={styles.designs}>{designs} Designs</h5>}
        {!Professional && <span className={styles.monthly}>Monthly</span>}
        {!Professional && <span className={styles.extra}>({extra} Extra)</span>}
        <span className={styles.price}>£{price}</span>
      </div>
      <a
        href="#"
        target="_blank"
        className={`${styles.choose__btn} ${Professional ? styles.pro : ""}`}
      >
        Choose Plan <IoCaretForwardOutline />
      </a>
    </div>
  );
};

export default PlanCard;
