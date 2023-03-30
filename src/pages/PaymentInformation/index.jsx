import React from "react";
import { HeaderSettings, Input } from "../../components";
import styles from "./.module.scss";

const PaymentInformation = () => {
  const title = (
    <h5 className={styles.title__header}>
      <span>Settings</span> - <span>Payment & Billing </span> - Replace Payment
      Information
    </h5>
  );

  return (
    <div className={styles.page}>
      <HeaderSettings title={title} />
      <div className={styles.content}>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={styles.box}>
            <h5 className={styles.title}>Add Card Details</h5>
            <div className={styles.inputs__container}>
              <Input type="text" placeholder="Name on Card" />
              <Input type="number" placeholder="Card Number" />
              <div className={styles.tow__inputs}>
                <Input type="text" placeholder="Expiry Date" />
                <Input type="text" placeholder="CVC" />
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <h5 className={styles.title}>Add Billing Information</h5>
            <div className={styles.inputs__container}>
              <Input type="text" placeholder="First Line of Address" />
              <Input type="text" placeholder="Second Line of Address" />
              <div className={styles.tow__inputs}>
                <Input type="text" placeholder="Town/City" />
                <Input type="text" placeholder="Post/ZIP Code" />
              </div>
            </div>
          </div>
          <button type="submit" className={styles.submit__btn}>
            Update & Replace
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentInformation;