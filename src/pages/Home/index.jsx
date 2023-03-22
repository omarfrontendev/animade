import React from "react";
import {
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
      <HowWorks />
      <Potential />
      <Fees />
      <Mission />
      <ContactUs />
    </>
  );
};

export default Home;
