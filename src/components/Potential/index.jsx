import React from "react";
import { Title } from "../";
import Image from "../../assets/Rectangle 4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import styles from "./.module.scss";

const Potential = () => {
  return (
    <section className={`${styles.section} section`}>
      <div className="container">
        <Title>
          <span>Explore the Potential </span>
        </Title>
        <h4 className={styles.slider__title}>Recently Uploaded NFTs</h4>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={50}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className={styles.slider}
      >
        {new Array(8).fill("").map((item, i) => (
          <SwiperSlide key={i}>
            <div className={styles.box}>
              <img src={Image} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="container">
        <h4 className={`${styles.slider__title} ${styles.slider__title__2}`}>
          Recently Uploaded Prints
        </h4>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={50}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className={styles.slider}
      >
        {new Array(8).fill("").map((item, i) => (
          <SwiperSlide key={i}>
            <div className={styles.box}>
              <img src={Image} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Potential;
