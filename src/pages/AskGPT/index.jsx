import React from "react";
import { IoCaretForwardOutline } from "react-icons/io5";
import {
  Button,
  CardsList,
  CheckBox,
  FooterBtns,
  GenerateForm,
} from "../../components";
import styles from "./.module.scss";

const AskGPT = () => {
  return (
    <>
      <div className={styles.page}>
        <h3 className="section__title">Ask GPT-4 for some help</h3>
        <div className={styles.section__form}>
          <div className={styles.form}>
            <GenerateForm
              type="ai"
              placeholder="What do you want to see? Be specific."
            />
          </div>
          <div className={styles.check__box}>
            <div className={styles.check__box__list}>
              <CheckBox
                label={"A dog eating a hot dog in photorealistic style"}
                value={0}
              />
              <CheckBox
                label={"A dog eating a hot dog in photorealistic style"}
                value={1}
              />
              <CheckBox
                label={"A dog eating a hot dog in photorealistic style"}
                value={2}
              />
              <CheckBox
                label={"A dog eating a hot dog in photorealistic style"}
                value={3}
              />
              <CheckBox
                label={"A dog eating a hot dog in photorealistic style"}
                value={4}
              />
            </div>
            <Button color="purple" type="button">
              <div className={styles.generat__btn}>
                Create Selected <IoCaretForwardOutline />
              </div>
            </Button>
          </div>
        </div>
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

export default AskGPT;
