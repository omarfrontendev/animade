import React from "react";
import OutputCard from "../OutputCard";
import styles from "./.module.scss";

const CardsList = ({ list, isSelected }) => {
  return (
    <div className={styles.list}>
      {list.map((_, i) => (
        <OutputCard key={i} isSelected={isSelected} />
      ))}
    </div>
  );
};

export default CardsList;
