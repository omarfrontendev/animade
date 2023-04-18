import React from "react";
import { Button, CheckoutForm, HeaderSettings, Input } from "../../components";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import titleClasses from "../Settings/.module.scss";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import styles from "./.module.scss";

const stripePromise = loadStripe(
  "pk_test_51LNF3wCuskqUZKWT5ZQXcSa0c96FP2jFu0ubWGrTlLJbomfuPT9z9edcFa5EFK2PBFhx64xGi7MdzDrRmFGQN0ED00G981buvD"
);

const PaymentInformation = () => {
  const title = (
    <h5 className={titleClasses.title__header}>
      <span>
        <Link to="/settings">Settings</Link>
      </span>
      <IoIosArrowBack />
      <span>
        <Link to="/settings/payment">Payment & Billing</Link>
      </span>
      <IoIosArrowBack />
      Replace Payment Information
    </h5>
  );

  return (
    <div className={styles.page}>
      <HeaderSettings title={title} />
      {/* <div className={styles.content}>
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
          <Button type="button">Update & Replace</Button>
        </form>
      </div> */}
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default PaymentInformation;
