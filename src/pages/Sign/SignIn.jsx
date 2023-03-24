import React from "react";
import { Title, Input } from "../../components";
import { AiOutlineLogin } from "react-icons/ai";
import styles from "./.module.scss";
import { Link } from "react-router-dom";

const SignIn = () => {
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
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputs__group}>
              <Input placeholder="Email Address" type="email" />
              <Input placeholder="Password" type="password" />
            </div>
            <button type="button" className={styles.forget__pass}>
              Forgot Password
            </button>
            <button type="submit" className={styles.login__btn}>
              Sign In
              <AiOutlineLogin className={styles.login__icon} />
            </button>
            <Link to="/register" className={styles.text__}>
              Not a member?
              <span> Sign up now</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
