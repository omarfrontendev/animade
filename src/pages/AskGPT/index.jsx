import React, { useState } from "react";
import { IoCaretForwardOutline } from "react-icons/io5";
import {
  Button,
  CardsList,
  CheckBox,
  FooterBtns,
  GenerateForm,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import styles from "./.module.scss";
import { aiModels } from "../../redux/services/aiModels";

const AskGPT = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const { askAiImages, error, isLoading, models } = useSelector(
    (state) => state.AIResults
  );

  return (
    <>
      <div className={styles.page}>
        <h3 className="section__title">Ask GPT-4 for some help</h3>
        <div className={styles.section__form}>
          {/* <button onClick={() => dispatch(aiModels(data))}>Ask Ai</button> */}
          <div className={styles.form}>
            <GenerateForm
              type="ai"
              placeholder="What do you want to see? Be specific."
              setData={setData}
              data={data}
              onSubmit={() => dispatch(aiModels(data))}
              loading={isLoading}
              max="10"
              model={true}
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
        {/* <section className={`section ${styles.section}`}>
          <h4 className="section__title">
            Output ({askAiImages?.length || 0})
          </h4>
          {isLoading ? (
            <span className={`spinner ${styles.loader__spinner}`}></span>
          ) : error ? (
            <p className="error__msg">{error?.message}</p>
          ) : !askAiImages ? (
            <h5>Search For Images</h5>
          ) : !askAiImages?.length ? (
            <h5>No Results</h5>
          ) : (
            <CardsList list={askAiImages.map((image) => image.url) || []} />
          )}
        </section> */}
        <section className={`section ${styles.section}`}>
          <h4 className="section__title">Output ({models?.length || 0})</h4>
          {isLoading ? (
            <span className={`spinner ${styles.loader__spinner}`}></span>
          ) : error ? (
            <p className="error__msg">{error?.message}</p>
          ) : !models ? (
            <h5>Search For Images</h5>
          ) : !models?.length ? (
            <h5>No Results</h5>
          ) : (
            // <CardsList list={models.map((image) => image.url) || []} />
            <div className={styles.models}>
              {models.map((model, i) => (
                <p className={styles.model__p} key={i}>
                  {model}
                </p>
              ))}
            </div>
          )}
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
