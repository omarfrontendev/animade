import React from "react";
import OutputCard from "../OutputCard";
import styles from "./.module.scss";

const CardsList = ({ list, isSelected }) => {
  return (
    <div className={styles.list}>
      {list.map((image, i) => (
        <OutputCard key={i} image={image} isSelected={isSelected} />
      ))}
    </div>
  );
};

export default CardsList;
