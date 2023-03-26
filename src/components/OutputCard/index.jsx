import React, { useState } from "react";
import Image from "../../assets/Rectangle 4.png";
import styles from "./.module.scss";

const OutputCard = ({ isSelected }) => {
  const [selected, setSelected] = useState(isSelected);

  return (
    <div
      className={`${styles.card} ${selected ? styles.selected : ""}`}
      onClick={() => setSelected((prev) => !prev)}
    >
      <img src={Image} alt="" />
    </div>
  );
};

export default OutputCard;
