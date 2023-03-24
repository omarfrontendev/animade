import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Input, Title } from "../../components";
import styles from "./.module.scss";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.page__content}>
          <Title align="center">
            <div className={styles.main__title}>
              <span>Your dream products,</span>
              <br />
              <span>made possible.</span>
            </div>
          </Title>
          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/vertify-number");
            }}
          >
            <div className={styles.inputs__group}>
              <div className={styles.first__inputs}>
                <Input type="text" placeholder="Your Name" />
                <Input type="number" placeholder="Phone number" />
              </div>
              <Input placeholder="Email Address" type="email" />
              <div className={styles.first__inputs}>
                <Input type="text" placeholder="Company (Optional)" />
                <Input type="number" placeholder="Promo Code" />
              </div>
              <Input placeholder="Password" type="password" />
              <Input placeholder="Confirm Password" type="password" />
            </div>
            <button type="submit" className={styles.login__btn}>
              Sign Up for FREE
              <AiOutlineLogin className={styles.login__icon} />
            </button>
            <Link to="/login" className={styles.text__}>
              Have an account?
              <span> Sign In</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
