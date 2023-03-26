import React from "react";
import { PlanCard, Title } from "../../components";
import { plansImage } from "../../assets";
import styles from "./.module.scss";

const Pricing = () => {
  const plans = [
    {
      title: "Booster",
      subtitle: "Take your business off the ground",
      designs: 100,
      extra: 50,
      price: 1.99,
    },
    {
      title: "Accelerate",
      subtitle: "Reach new heights",
      designs: 850,
      extra: 800,
      price: 5.99,
    },
    {
      title: "Turbocharge",
      subtitle: "Some serious power",
      designs: 3050,
      extra: 300,
      price: 15.99,
    },
    {
      title: "Professional",
      subtitle: "Unlimited potential",
      price: 26.99,
      Professional: true,
    },
  ];

  return (
    <div className="container">
      <div className={styles.content}>
        <Title align="center">
          <span>Launch your business</span> into the <span>Stratosphere</span>{" "}
          and <span>scale up</span> with <span>AI-Powered Products.</span>
        </Title>
        <div className={styles.list}>
          {plans.map((plan, i) => (
            <PlanCard
              key={i}
              title={plan?.title}
              subtitle={plan?.subtitle}
              price={plan?.price}
              extra={plan?.extra}
              designs={plan?.designs}
              image={plansImage[i]}
              Professional={plan?.Professional}
            />
          ))}
        </div>
        <Title align="center">
          <span>First 50 Monthly designs on us.</span>
          <br />
          Cancel anytime.
        </Title>
      </div>
    </div>
  );
};

export default Pricing;
