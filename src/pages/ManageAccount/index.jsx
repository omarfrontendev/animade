import React from "react";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { HeaderSettings, PlatFormCard } from "../../components";
import { IoIosArrowBack } from "react-icons/io";
import titleClasses from "../Settings/.module.scss";
import styles from "../ChoosePlatform/.module.scss";

const ManageAccount = () => {
  const title = (
    <h5 className={titleClasses.title__header}>
      <span>
        <Link to="/settings">Settings</Link>
      </span>
      <IoIosArrowBack /> Manage Accounts
    </h5>
  );
  return (
    <div className={styles.page}>
      <HeaderSettings title={title} />
      <div className={styles.platform__section}>
        <div className={styles.platform__header}>
          <h5 className={styles.platform__title}>OpenSea - NFT</h5>
          <Link to="/" className={styles.add__new}>
            <IoIosAdd className={styles.icon} />
            Link New Account
          </Link>
        </div>
        <div className={styles.platform__list}>
          {new Array(3).fill("").map((_, i) => (
            <PlatFormCard key={i} type="OpenSea" />
          ))}
        </div>
      </div>
      <div className={styles.platform__section}>
        <div className={styles.platform__header}>
          <h5 className={styles.platform__title}>
            Printful Store - Print On Demand
          </h5>
          <Link to="/" className={styles.add__new}>
            <IoIosAdd className={styles.icon} />
            Link New Account
          </Link>
        </div>
        <div className={styles.platform__list}>
          {new Array(3).fill("").map((_, i) => (
            <PlatFormCard key={i} type="Printful" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageAccount;
