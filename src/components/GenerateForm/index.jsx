import React from "react";
import { Input } from "../";
// import { IoCaretForwardOutline } from "react-icons/io5";
import styles from "./.module.scss";

const GenerateForm = ({ type, placeholder, onSubmit, setData, data }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className={styles.form}
    >
      <Input
        type="textarea"
        placeholder={placeholder}
        onChange={(e) => setData({ ...data, prompt: e.target.value })}
      />
      <div className={styles.form__control}>
        <span>Images per prompt</span>
        <input
          type="text"
          defaultValue={0}
          onChange={(e) => setData({ ...data, samples: e.target.value })}
        />
        {/* <Button color="purple" type="submit">
          <div className={styles.generat__btn}>
            {type === "ai" ? "Ask Ai" : "Generate"}
            <IoCaretForwardOutline />
          </div>
        </Button> */}
        <button type="submit">Generate</button>
      </div>
    </form>
  );
};

export default GenerateForm;
