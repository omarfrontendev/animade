import React, { useState } from "react";
import { Button, HeaderSettings, Input } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import titleClasses from "../Settings/.module.scss";
import axios from "axios";
import styles from "./.module.scss";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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
      setData({});
      navigate("/");
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
  let validate = true;

  if (
    /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      data?.old_password
    ) &&
    /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      data?.new_password
    ) &&
    data?.confirmpassword === data.new_password
  ) {
    validate = false;
  }

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
            validation={(e) => e.length > 6}
            errorMsg="New password Must be More Than 6 character"
            required={true}
            value={data?.old_password || ""}
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
            validation={(e) => e.length > 6}
            errorMsg="New password Must be More Than 6 character"
            required={true}
            value={data?.new_password || ""}
          />
        </div>
        <div className={styles.input__box}>
          <label>Confirm Password</label>
          <Input
            placeholder="Confirm Password"
            type="password"
            onChange={(e) =>
              setData({
                ...data,
                confirmpassword: e.target.value,
              })
            }
            validation={(e) => e === data?.new_password}
            errorMsg="Confirm Password Must be Matched with New Password"
            required={true}
            value={data?.confirmpassword || ""}
          />
        </div>
        <Button type="submit" loading={loading} disabled={validate}>
          Change Password
        </Button>
      </form>
    </div>
  );
};

export default ChangePassword;
