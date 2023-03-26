import React from "react";
import { Button, FooterBtns } from "../../components";
import ProductCard from "../../components/ProductCard";
import { IoIosAdd } from "react-icons/io";
import styles from "./.module.scss";
import { Link } from "react-router-dom";

const ChooseProdutcs = () => {
  return (
    <>
      <div className={styles.page}>
        <h3 className="section__title">
          Which products would you like to print on?
        </h3>
        <div className={styles.products__section}>
          <div className={styles.products__header}>
            <h5 className={styles.products__title}>
              Choose from your Printful Templates
            </h5>
            <Link to="/" className={styles.add__new}>
              <IoIosAdd className={styles.icon} />
              New Template
            </Link>
          </div>
          <div className={styles.products__list}>
            {new Array(3).fill("").map((_, i) => (
              <ProductCard key={i} />
            ))}
          </div>
        </div>
      </div>
      <FooterBtns>
        <div>
          <Button to="/add-product-info">Add Product Information</Button>
        </div>
      </FooterBtns>
    </>
  );
};

export default ChooseProdutcs;
