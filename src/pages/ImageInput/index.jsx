import React from "react";
import { Button, CardsList, FooterBtns, GenerateForm } from "../../components";
import { UploadIocn } from "../../icons";
import { BiUpload } from "react-icons/bi";
import styles from "./.module.scss";

const ImageInput = () => {
  return (
    <>
      <div className={styles.page}>
        <h3 className="section__title">Ask GPT-4 for some help</h3>
        <div className={styles.section__form}>
          <div className={styles.form}>
            <GenerateForm
              placeholder={
                "Upload the image and provide a prompt. This is great if you want to edit an image, or create variations. You can even change the art style."
              }
            />
          </div>
          <div className={styles.upload__image}>
            <input type="file" id="uploadImage" />
            <label htmlFor="uploadImage" className={styles.label__img}>
              <UploadIocn />
            </label>
            <label htmlFor="uploadImage" className={styles.label__btn}>
              Upload Image
              <BiUpload />
            </label>
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

export default ImageInput;
