import React from "react";
import { Button, CardsList, FooterBtns, GenerateForm } from "../../components";
import styles from "./.module.scss";

const SingleInput = () => {
  return (
    <>
      <div className={styles.page}>
        <h3 className="section__title">
          Create designs from your wildest dreams
        </h3>
        <GenerateForm
          type="single-input"
          placeholder="What do you want to see? Be specific."
        />
        <section className={`section ${styles.section}`}>
          <h4 className="section__title">Output (4)</h4>
          <CardsList list={new Array(4).fill("")} />
        </section>
        <section className={`section ${styles.section}`}>
          <h4 className="section__title">Selected Designs (12)</h4>
          <CardsList list={new Array(12).fill("")} isSelected={true} />
        </section>
      </div>
      <FooterBtns>
        <div>
          <Button to="/choose-platform">Choose Your Platform</Button>
        </div>
      </FooterBtns>
    </>
  );
};

export default SingleInput;
