import React, { useState } from "react";
import { Button, HeaderSettings, Input } from "../../components";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import titleClasses from "../Settings/.module.scss";
import axios from "axios";
import styles from "./.module.scss";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const updatePass = async () => {
    setLoading(true);
    try {
      const formdata = new FormData();
      formdata.append("new_password", data.new_password);
      formdata.append("old_password", data.old_password);
      const res = await axios.put(
        `${process.env.REACT_APP_SERVER_API_URL}/change-password/`,
        formdata,
        {
          headers: {
            Authorization: `Token ${JSON.parse(localStorage.getItem("token"))}`,
          },
        }
      );
      setLoading(false);
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast__fiy",
      });
    } catch (error) {
      toast.error(error.response.data.old_password[0] || "Something Wrong!", {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast__fiy",
      });
      setLoading(false);
      return error;
    }
  };

  const title = (
    <h5 className={titleClasses.title__header}>
      <span>
        <Link to="/settings">Settings</Link>
      </span>
      <IoIosArrowBack /> Change Password
    </h5>
  );

  return (
    <div className={styles.page}>
      <HeaderSettings title={title} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updatePass();
        }}
        className={styles.form}
      >
        <div className={styles.input__box}>
          <label>Current Password</label>
          <Input
            type="password"
            placeholder="Your Password"
            onChange={(e) =>
              setData({
                ...data,
                old_password: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.input__box}>
          <label>New Password</label>
          <Input
            type="password"
            placeholder="New Password"
            onChange={(e) =>
              setData({
                ...data,
                new_password: e.target.value,
              })
            }
          />
        </div>
        {/* <div className={styles.input__box}>
          <label>Confirm New Password</label>
          <Input type="password" placeholder="Confirm New Password" />
        </div> */}
        {/* <button type="submit" className={styles.submit__btn}>
          Change Password
        </button> */}
        <Button type="submit" loading={loading}>
          Change Password
        </Button>
      </form>
    </div>
  );
};

export default ChangePassword;
