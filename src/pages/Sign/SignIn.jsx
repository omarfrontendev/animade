import React, { useState } from "react";
import { Title, Input } from "../../components";
import { AiOutlineLogin } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/services/login";
import styles from "./.module.scss";
import { toast } from "react-toastify";

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
        toast.success("Success Login!", {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast__fiy",
        });
        setTimeout(() => {
          navigate("/single-input");
        }, 1000);
      } else {
        toast.error(res?.error.message, {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast__fiy",
        });
      }
    });
  };

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
              />
              <Input
                placeholder="Email Address"
                type="email"
                onChange={(e) => inputChangeHandler(e, "email")}
                error={error?.response?.data?.email}
              />
              <Input
                placeholder="Password"
                type="password"
                onChange={(e) => inputChangeHandler(e, "password")}
                error={error?.response?.data?.password}
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
              disabled={isLoaing}
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
