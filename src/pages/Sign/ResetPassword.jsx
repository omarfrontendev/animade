import React, { useState } from "react";
import { Title, Input } from "../../components";
import { useNavigate } from "react-router-dom";
import styles from "./.module.scss";
import axios from "axios";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const submitFormHandler = async (e) => {
    e.preventDefault();
    setloading(true);
    setError(false);
    try {
      await axios.post(
        `${process.env.REACT_APP_SERVER_API_URL}/password_reset/confirm/`,
        {
          token: data.token,
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setloading(false);
      toast.success("Reset Your Password successfully !", {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast__fiy",
      });
      setData({});
      navigate("/");
    } catch (error) {
      setloading(false);
      setError(error);
      toast.error(error.response.data.detail, {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast__fiy",
      });
    }
  };

  let validate = true;

  if (
    data?.token &&
    /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      data?.password
    ) &&
    data?.confirmpassword === data.password
  ) {
    validate = false;
  }

  return (
    <>
      <div className={styles.page}>
        <div className="container">
          <div className={styles.page__content}>
            <Title align="center">
              <div className={styles.main__title}>
                {/* <span>Your dream products,</span>
                <br />
                <span>made possible.</span> */}
                Check your email
              </div>
            </Title>
            <form className={styles.form} onSubmit={submitFormHandler}>
              <div className={styles.inputs__group}>
                <Input
                  type="text"
                  placeholder="Enter Your Token"
                  onChange={(e) =>
                    setData({
                      ...data,
                      token: e.target.value,
                    })
                  }
                  error={error?.response?.data?.detail}
                  value={data?.token || ""}
                  validation={(e) => e.length > 0}
                  errorMsg="This Field Can't Be Empty"
                  required={true}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  onChange={(e) =>
                    setData({
                      ...data,
                      password: e.target.value,
                    })
                  }
                  value={data?.password || ""}
                  error={error?.response?.data?.password}
                  validation={(e) => e.length > 7}
                  errorMsg="Password Must be More Than 6 character"
                  required={true}
                />
                <Input
                  placeholder="Confirm Password"
                  type="password"
                  onChange={(e) =>
                    setData({
                      ...data,
                      confirmpassword: e.target.value,
                    })
                  }
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
                  loading ? styles.loading : ""
                }`}
                disabled={loading || validate}
              >
                {loading ? (
                  <span className={styles.loader}></span>
                ) : (
                  <>Reset Your password</>
                )}
              </button>
              {error && (
                <p className={styles.error__message}>{error?.message}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
