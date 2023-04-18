import React, { useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Input, Title } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/services/register";
import styles from "./.module.scss";
import { getUser } from "../../redux/services/getUser";

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

  let validate = true;

  if (
    data?.username?.length > 0 &&
    data?.password?.length > 6 &&
    data?.confirmpassword === data?.password &&
    data?.email.includes("@" && ".") &&
    data?.email.slice(-1) !== "." &&
    data?.phonenumber.length > 4
  ) {
    validate = false;
  }
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
                  setTimeout(() => {
                    navigate("/single-input");
                  }, 1000);
                }
              });
              dispatch(getUser());
            }}
          >
            <div className={styles.inputs__group}>
              <div className={styles.first__inputs}>
                <Input
                  type="text"
                  placeholder="Your Name"
                  onChange={(e) => inputChangeHandler(e, "username")}
                  error={error?.response?.data?.username}
                  validation={(e) => e.length > 0}
                  errorMsg="This Field Can't Be Empty"
                  required={true}
                  value={data?.username || ""}
                />
                <Input
                  type="number"
                  placeholder="Phone number"
                  onChange={(e) => inputChangeHandler(e, "phonenumber")}
                  error={error?.response?.data?.phonenumber}
                  validation={(e) => e.length > 4}
                  errorMsg="Number Must be More Than (4 ch)"
                  required={true}
                  value={data?.phonenumber || ""}
                />
              </div>
              <Input
                placeholder="Email Address"
                type="email"
                onChange={(e) => inputChangeHandler(e, "email")}
                error={error?.response?.data?.email}
                validation={(e) =>
                  e.includes("@" && ".") && e.slice(-1) !== "."
                }
                errorMsg="Enter in the format:name@example.com"
                required={true}
                value={data?.email || ""}
              />
              <div className={styles.first__inputs}>
                <Input
                  type="text"
                  placeholder="Company (Optional)"
                  onChange={(e) => inputChangeHandler(e, "companyopitional")}
                  error={error?.response?.data?.companyopitional}
                  value={data?.companyopitional || ""}
                />
                <Input
                  type="number"
                  placeholder="Promo Code"
                  onChange={(e) => inputChangeHandler(e, "promocode")}
                  error={error?.response?.data?.promocode}
                  value={data?.promocode || ""}
                />
              </div>
              <Input
                placeholder="Password"
                type="password"
                onChange={(e) => inputChangeHandler(e, "password")}
                error={error?.response?.data?.password}
                validation={(e) => e.length > 6}
                errorMsg="Password Must be More Than 6 character"
                required={true}
                value={data?.password || ""}
              />
              <Input
                placeholder="Confirm Password"
                type="password"
                onChange={(e) => inputChangeHandler(e, "confirmpassword")}
                error={error?.response?.data?.confirmpassword}
                validation={(e) => e === data?.password}
                errorMsg="confirm Password Must be Matched with Password"
                required={true}
                value={data?.confirmpassword || ""}
              />
            </div>
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
