import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { Button } from "../";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/services/logout";
import { toast } from "react-toastify";
import styles from "./.module.scss";

const Header = () => {
  const { token, isLoaing } = useSelector((state) => state.auth);
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          <img className={styles.logo__img} src={Logo} alt="logo" />
        </Link>
        <div className={styles.left__nav}>
          <ul
            className={`${styles.links__list} ${openMenu ? styles.open : ""}`}
          >
            <li>
              <Link to="/">How it Works</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            {token ? (
              <li>
                <button
                  onClick={async () =>
                    await dispatch(logout()).then((res) => {
                      if (!res?.error) {
                        toast.success("Success Logout!", {
                          position: toast.POSITION.BOTTOM_RIGHT,
                          className: "toast__fiy",
                        });
                      } else {
                        toast.error(res?.error.message, {
                          position: toast.POSITION.BOTTOM_RIGHT,
                          className: "toast__fiy",
                        });
                      }
                    })
                  }
                  className={styles.logout__btn}
                  disabled={isLoaing}
                >
                  {isLoaing ? <span className="spinner"></span> : "Logout"}
                </button>
              </li>
            ) : (
              <li>
                <Link to="/login">Log In</Link>
              </li>
            )}
          </ul>
          <button
            className={styles.toggle__menu}
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            {openMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
          <Button to="/single-input">Get Started</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
