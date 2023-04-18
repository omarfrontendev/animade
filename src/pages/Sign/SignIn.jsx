import React, { useState } from "react";
import { Title, Input } from "../../components";
import { AiOutlineLogin } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/services/login";
import styles from "./.module.scss";
import { getUser } from "../../redux/services/getUser";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, isLoaing } = useSelector((state) => state.auth);
  const [data, setData] = useState({});

  const inputChangeHandler = (e, id) => {
    setData({
      ...data,
      [id]: e.target.value,
    });
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    await dispatch(login(data)).then((res) => {
      if (!res?.error) {
        setTimeout(() => {
          navigate("/single-input");
        }, 1000);
      }
    });
    dispatch(getUser());
  };

  let validate = true;

  if (data?.username && data?.password?.length > 6) {
    validate = false;
  }

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
          <form className={styles.form} onSubmit={submitFormHandler}>
            <div className={styles.inputs__group}>
              <Input
                type="text"
                placeholder="Your Name"
                onChange={(e) => inputChangeHandler(e, "username")}
                error={error?.response?.data?.username}
                value={data.username || ""}
                validation={(e) => e.length > 0}
                errorMsg="This Field Can't Be Empty"
                required={true}
              />
              <Input
                placeholder="Password"
                type="password"
                onChange={(e) => inputChangeHandler(e, "password")}
                value={data.password || ""}
                error={error?.response?.data?.password}
                validation={(e) => e.length > 6}
                errorMsg="Password Must be More Than 6 character"
                required={true}
              />
            </div>
            <button type="button" className={styles.forget__pass}>
              Forgot Password
            </button>
            <button
              type="submit"
              className={`${styles.login__btn} ${
                isLoaing ? styles.loading : ""
              }`}
              disabled={isLoaing || validate}
            >
              {isLoaing ? (
                <span className={styles.loader}></span>
              ) : (
                <>
                  Sign In
                  <AiOutlineLogin className={styles.login__icon} />
                </>
              )}
            </button>
            {error && <p className={styles.error__message}>{error?.message}</p>}
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
