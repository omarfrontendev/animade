import React from "react";
import { Input, Title } from "../";
import styles from "./.module.scss";

const ContactUs = () => {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <Title align="center">
          <div>Contact Us</div>
          <span>Let us know what you think.</span>
        </Title>
        <form
          onSubmit={(e) => e.preventDefault()}
          className={styles.contact__form}
        >
          <div className={styles.first__inputs}>
            <Input type="text" placeholder="Your Name" />
            <Input type="number" placeholder="Phone number" />
          </div>
          <Input type="email" placeholder="Email Address" />
          <Input type="textarea" placeholder="How can we help?" />
          <button type="submit" className={styles.submit__btn}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
