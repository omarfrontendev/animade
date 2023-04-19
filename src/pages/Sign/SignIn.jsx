import React, { useState } from "react";
import { Title, Input, Modal, Button } from "../../components";
import { AiOutlineLogin } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/services/login";
import styles from "./.module.scss";
import { getUser } from "../../redux/services/getUser";
import axios from "axios";
import { toast } from "react-toastify";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, isLoaing } = useSelector((state) => state.auth);
  const [data, setData] = useState({});
  const [openPopup, setOpenPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setloading] = useState(false);

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

  if (
    data?.username &&
    !data?.username.includes(" ") &&
    /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      data?.password
    )
  ) {
    validate = false;
  }

  const sendEmail = async () => {
    setloading(true);
    try {
      await axios.post(
        `${process.env.REACT_APP_SERVER_API_URL}/password_reset/`,
        {
          email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setloading(false);
      toast.success("check Your Email !", {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast__fiy",
      });
      navigate("/reset__password");
    } catch (error) {
      setloading(false);
      toast.error(error?.response?.data?.email[0], {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast__fiy",
      });
    }
  };

  return (
    <>
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
                  validation={(e) => e && !e.includes(" ")}
                  errorMsg={`This Field Can't Be Empty, Not Contain a Space " " !`}
                  required={true}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  onChange={(e) => inputChangeHandler(e, "password")}
                  value={data.password || ""}
                  error={error?.response?.data?.password}
                  validation={(e) =>
                    /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                      e
                    )
                  }
                  errorMsg="password should contain atleast one number, letter, one special character [@$!%*?&]"
                  required={true}
                />
              </div>
              <button
                type="button"
                onClick={() => setOpenPopup(true)}
                className={styles.forget__pass}
              >
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
              {error && (
                <p className={styles.error__message}>{error?.message}</p>
              )}
              <Link to="/register" className={styles.text__}>
                Not a member?
                <span> Sign up now</span>
              </Link>
            </form>
          </div>
        </div>
      </div>
      {openPopup && (
        <Modal
          setState={setOpenPopup}
          title="Name your Drop"
          buttons={
            <div className={styles.btns}>
              <Button
                onClick={() => setOpenPopup(false)}
                type="button"
                color="gray"
              >
                Cancel
              </Button>
              <Button
                type="button"
                disabled={
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) ||
                  loading
                }
                loading={loading}
                onClick={sendEmail}
              >
                Send
              </Button>
            </div>
          }
        >
          <div className={styles.input}>
            <label>Your Email</label>
            <Input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required={true}
              value={email || ""}
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default SignIn;
