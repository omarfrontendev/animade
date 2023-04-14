import React, { useState } from "react";
import { Button, CardsList, FooterBtns, GenerateForm } from "../../components";
import styles from "./.module.scss";
import axios from "axios";

const SingleInput = () => {
  const [data, setData] = useState({});

  const generateImages = async () => {
    try {
      const jsone = JSON.stringify({
        key: "kj36kb5bvU5gR8liQoTHe4T1IBHentRZYqqwuVb0cEozZPb3fiUM51jjVaCp",
        prompt:
          "ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K",
        negative_prompt:
          "((out of frame)), ((extra fingers)), mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), (((tiling))), ((naked)), ((tile)), ((fleshpile)), ((ugly)), (((abstract))), blurry, ((bad anatomy)), ((bad proportions)), ((extra limbs)), cloned face, (((skinny))), glitchy, ((extra breasts)), ((double torso)), ((extra arms)), ((extra hands)), ((mangled fingers)), ((missing breasts)), (missing lips), ((ugly face)), ((fat)), ((extra legs)), anime",
        width: "512",
        height: "512",
        samples: "1",
        num_inference_steps: "20",
        seed: null,
        guidance_scale: 7.5,
        webhook: null,
        track_id: null,
      });

      const res = await axios.post(
        "https://stablediffusionapi.com/api/v3/text2img",
        jsone,
        {
          headers: {
            // Overwrite Axios's automatically set Content-Type
            "Content-Type": "application/json",
          },
        }
      );
      // const responseData = await res.json();
      console.log(res);
    } catch (error) {
      console.log(error);
    }

    // =================================== //
    // ===== Postman Code ======
    // =================================== //
    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // var raw = JSON.stringify({
    //   key: "kj36kb5bvU5gR8liQoTHe4T1IBHentRZYqqwuVb0cEozZPb3fiUM51jjVaCp",
    //   prompt:
    //     "ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K",
    //   negative_prompt:
    //     "((out of frame)), ((extra fingers)), mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), (((tiling))), ((naked)), ((tile)), ((fleshpile)), ((ugly)), (((abstract))), blurry, ((bad anatomy)), ((bad proportions)), ((extra limbs)), cloned face, (((skinny))), glitchy, ((extra breasts)), ((double torso)), ((extra arms)), ((extra hands)), ((mangled fingers)), ((missing breasts)), (missing lips), ((ugly face)), ((fat)), ((extra legs)), anime",
    //   width: "512",
    //   height: "512",
    //   samples: "1",
    //   num_inference_steps: "20",
    //   seed: null,
    //   guidance_scale: 7.5,
    //   webhook: null,
    //   track_id: null,
    // });
    // var requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: "follow",
    //   // mode: "no-cors",
    // };
    // fetch("https://stablediffusionapi.com/api/v3/text2img", requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log("error", error));

    // =================================== //
    // =====axios code =====
    // =================================== //
    // try {
    //   const res = await axios.post(
    //     "https://stablediffusionapi.com/api/v3/text2img",
    //     {
    //       key: "kj36kb5bvU5gR8liQoTHe4T1IBHentRZYqqwuVb0cEozZPb3fiUM51jjVaCp",
    //       prompt:
    //         "ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K",
    //       negative_prompt:
    //         "((out of frame)), ((extra fingers)), mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), (((tiling))), ((naked)), ((tile)), ((fleshpile)), ((ugly)), (((abstract))), blurry, ((bad anatomy)), ((bad proportions)), ((extra limbs)), cloned face, (((skinny))), glitchy, ((extra breasts)), ((double torso)), ((extra arms)), ((extra hands)), ((mangled fingers)), ((missing breasts)), (missing lips), ((ugly face)), ((fat)), ((extra legs)), anime",
    //       width: "512",
    //       height: "512",
    //       samples: "1",
    //       num_inference_steps: "20",
    //       seed: null,
    //       guidance_scale: 7.5,
    //       webhook: null,
    //       track_id: null,
    //     }
    //   );
    //   console.log(res);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
      <div className={styles.page}>
        <h3 className="section__title">
          Create designs from your wildest dreams
        </h3>
        {/* <GenerateForm
          type="single-input"
          placeholder="What do you want to see? Be specific."
          onSubmit={generateImages}
          setData={setData}
          data={data}
        /> */}
        <button onClick={generateImages}>Submit</button>
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
