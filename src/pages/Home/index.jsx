import React from "react";
import {
  Banner,
  ContactUs,
  Fees,
  Hero,
  HowWorks,
  Mission,
  Potential,
} from "../../components";

const Home = () => {
  return (
    <>
      <Hero />
      <Banner />
      <HowWorks />
      <Potential />
      <Fees />
      <Mission />
      <ContactUs />
    </>
  );
};

export default Home;
