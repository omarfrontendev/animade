import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Accordions } from "../../components";
import styles from "./.module.scss";

const SingleComplete = () => {
  const navigate = useNavigate();
  const drop = {
    id: 1,
    name: "Giant Design",
    products: [
      {
        id: 1,
        name: "NFT Listing Name",
        brand: ["Opensea"],
      },
      {
        id: 2,
        name: "Product Listing Name",
        brand: ["Shopify"],
      },
      {
        id: 3,
        name: "Product Listing Name",
        brand: ["Opensea", "Etsy"],
      },
    ],
  };
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <button className={styles.back__btn} onClick={() => navigate(-1)}>
          <IoIosArrowBack />
        </button>
        <h2 className={styles.title}>
          Drops - <span>World of Giants</span>
        </h2>
      </div>
      <div className={styles.content}>
        <Accordions item={drop} type="complete" />
      </div>
    </div>
  );
};

export default SingleComplete;
