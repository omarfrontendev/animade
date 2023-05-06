import React, { useState } from "react";
import { countriesCodes } from "../../utils/data";
import styles from "./.module.scss";

const AreaCode = ({ data, setData }) => {
  const [openMenu, setOpenMeun] = useState(false);

  return (
    <div className={styles.select__box}>
      <button
        type="button"
        className={styles.button}
        onClick={() => setOpenMeun((prev) => !prev)}
      >
        {data?.code}
      </button>
      {openMenu && (
        <ul className={styles.menu}>
          {countriesCodes.map((country, i) => (
            <li
              className={`${styles.item} ${
                data.code === country.dial_code ? styles.active : ""
              }`}
              value={country.dial_code}
              key={i}
              onClick={() =>
                setData({
                  ...data,
                  code: country.dial_code,
                })
              }
            >
              {country.dial_code} | {country.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AreaCode;
