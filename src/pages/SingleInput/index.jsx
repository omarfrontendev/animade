import React, { useState } from "react";
import { Button, CardsList, FooterBtns, GenerateForm } from "../../components";
import { textToImage } from "../../redux/services/textToImage";
import { useDispatch, useSelector } from "react-redux";
import styles from "./.module.scss";

const SingleInput = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const { resluts, error, isLoading, isError } = useSelector(
    (state) => state.AIResults
  );

  return (
    <>
      <div className={styles.page}>
        <h3 className="section__title">
          Create designs from your wildest dreams
        </h3>
        <GenerateForm
          type="single-input"
          placeholder="What do you want to see? Be specific."
          onSubmit={() => dispatch(textToImage(data))}
          setData={setData}
          data={data}
          loading={isLoading}
        />
        {/* <button onClick={generateImages}>Submit</button> */}
        <section className={`section ${styles.section}`}>
          <h4 className="section__title">Output ({resluts?.length || 0})</h4>
          {isLoading ? (
            <span className={`spinner ${styles.loader__spinner}`}></span>
          ) : isError?.status !== "success" ? (
            <>
              {isError?.messege?.prompt && (
                <p className="error__msg">{isError?.messege?.prompt[0]}</p>
              )}
              {isError?.messege?.samples && (
                <p className="error__msg">{isError?.messege?.samples[0]}</p>
              )}
              {isError?.message && (
                <p className="error__msg">{isError?.message}</p>
              )}
            </>
          ) : error ? (
            <p className="error__msg">Error...!</p>
          ) : !resluts ? (
            <h5>Search For Images</h5>
          ) : !resluts?.length ? (
            <h5>No Results</h5>
          ) : (
            <CardsList list={resluts || []} />
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

export default SingleInput;

// <>
//   <p className="error__msg">
//     {isError?.messege &&
//       isError?.message?.prompt &&
//       isError?.messege?.prompt[0]}
//     {/* <br /> */}
//     {isError?.messege &&
//       isError?.messege?.samples &&
//       isError?.messege?.samples[0]}
//   </p>
// </>;
// {
//   isError &&
//   isError?.status !== "success" &&
//   typeof isError?.message !== "object" ? (
//     <p className="error__msg">{isError?.message}</p>
//   ) : (
//     ""
//   );
// }
