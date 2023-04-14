import React, { useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Input, Title } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/services/register";
import { toast } from "react-toastify";
import styles from "./.module.scss";

const SignUp = () => {
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

  return (
    <div className={styles.page}>
      <div className="container">
        {/* <button onClick={notify}>Notify!</button> */}
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
            onSubmit={async (e) => {
              e.preventDefault();
              await dispatch(register(data)).then((res) => {
                if (!res?.error) {
                  toast.success("Success Register!", {
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
            }}
          >
            <div className={styles.inputs__group}>
              <div className={styles.first__inputs}>
                <Input
                  type="text"
                  placeholder="Your Name"
                  onChange={(e) => inputChangeHandler(e, "username")}
                  error={error?.response?.data?.username}
                />
                <Input
                  type="number"
                  placeholder="Phone number"
                  onChange={(e) => inputChangeHandler(e, "phonenumber")}
                  error={error?.response?.data?.phonenumber}
                />
              </div>
              <Input
                placeholder="Email Address"
                type="email"
                onChange={(e) => inputChangeHandler(e, "email")}
                error={error?.response?.data?.email}
              />
              <div className={styles.first__inputs}>
                <Input
                  type="text"
                  placeholder="Company (Optional)"
                  onChange={(e) => inputChangeHandler(e, "companyopitional")}
                  error={error?.response?.data?.companyopitional}
                />
                <Input
                  type="number"
                  placeholder="Promo Code"
                  onChange={(e) => inputChangeHandler(e, "promocode")}
                  error={error?.response?.data?.promocode}
                />
              </div>
              <Input
                placeholder="Password"
                type="password"
                onChange={(e) => inputChangeHandler(e, "password")}
                error={error?.response?.data?.password}
              />
              <Input
                placeholder="Confirm Password"
                type="password"
                onChange={(e) => inputChangeHandler(e, "confirmpassword")}
                error={error?.response?.data?.confirmpassword}
              />
            </div>
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
                  Sign Up for FREE
                  <AiOutlineLogin className={styles.login__icon} />
                </>
              )}
            </button>
            {error && <p className={styles.error__message}>{error?.message}</p>}
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
