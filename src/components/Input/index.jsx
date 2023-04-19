import React, { useState } from "react";
import styles from "./.module.scss";
import { BiHide, BiShow } from "react-icons/bi";

const Input = ({
  type,
  placeholder,
  onChange,
  error,
  required,
  value,
  validation,
  errorMsg,
}) => {
  const [hide, setHide] = useState(true);
  const [inputBlur, setInputBlur] = useState(false);
  const enteredValueIsValid = validation && validation(value);
  const errorInput = !enteredValueIsValid && inputBlur;

  if (type === "textarea")
    return (
      <div className={styles.textarea}>
        <textarea
          // className={styles.textarea}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
          onBlur={() => {
            setInputBlur(true);
          }}
          required={required}
          value={value || ""}
        />
        {error && <p className={styles.error__message}>{error}</p>}
        {!error && errorInput && errorMsg && (
          <p className={`${styles.error__input}`}>{errorMsg}</p>
        )}
      </div>
    );
  return (
    <div className={`${styles.input} ${error ? styles.error : ""}`}>
      <input
        type={
          type === "password" ? (hide ? "password" : "text") : type || "text"
        }
        placeholder={required ? placeholder + "*" : placeholder}
        onChange={(e) => onChange(e)}
        onBlur={() => {
          setInputBlur(true);
        }}
        required={required}
        value={value || ""}
      />
      {error && (
        <p className={styles.error__message}>
          {error?.map((msg, i) => (
            <div key={i}>{msg}</div>
          ))}
        </p>
      )}
      {!error && errorInput && errorMsg && (
        <p className={`${styles.error__input}`}>{errorMsg}</p>
      )}
      {type === "password" && (
        <button
          className={styles.show__pass}
          onClick={() => setHide((prev) => !prev)}
          type="button"
        >
          {hide ? <BiShow /> : <BiHide />}
        </button>
      )}
    </div>
  );
};

export default Input;
