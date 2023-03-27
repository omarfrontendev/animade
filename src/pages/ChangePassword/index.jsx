import React from "react";
import { HeaderSettings, Input } from "../../components";
import styles from "./.module.scss";

const ChangePassword = () => {
  const title = (
    <h5 className={styles.title__header}>
      <span>Settings</span> - Change Password
    </h5>
  );
  return (
    <div className={styles.page}>
      <HeaderSettings title={title} />
      <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
        <div className={styles.input__box}>
          <label>Current Password</label>
          <Input type="password" placeholder="Your Password" />
        </div>
        <div className={styles.input__box}>
          <label>New Password</label>
          <Input type="password" placeholder="New Password" />
        </div>
        <div className={styles.input__box}>
          <label>Confirm New Password</label>
          <Input type="password" placeholder="Confirm New Password" />
        </div>
        <button type="submit" className={styles.submit__btn}>
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
