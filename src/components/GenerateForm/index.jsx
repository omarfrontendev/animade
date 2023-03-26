import React from "react";
import { Button, Input } from "../";
import { IoCaretForwardOutline } from "react-icons/io5";
import styles from "./.module.scss";

const GenerateForm = ({ type, placeholder }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
      <Input type="textarea" placeholder={placeholder} />
      <div className={styles.form__control}>
        <span>Images per prompt</span>
        <input type="number" defaultValue={0} />
        <Button color="purple" type="button">
          <div className={styles.generat__btn}>
            {type === "ai" ? "Ask Ai" : "Generate"}
            <IoCaretForwardOutline />
          </div>
        </Button>
      </div>
    </form>
  );
};

export default GenerateForm;
