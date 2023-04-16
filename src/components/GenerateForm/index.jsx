import React from "react";
import { Button, Input } from "../";
import { IoCaretForwardOutline } from "react-icons/io5";
import styles from "./.module.scss";

const GenerateForm = ({
  type,
  placeholder,
  onSubmit,
  setData,
  data,
  loading,
}) => {
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
        required={true}
      />
      <div className={styles.form__control}>
        <span>Images per prompt</span>
        <input
          type="number"
          required
          min="1"
          max="4"
          value={data?.samples || ""}
          onChange={(e) => setData({ ...data, samples: e.target.value })}
        />
        <Button color="purple" type="submit" loading={loading}>
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
