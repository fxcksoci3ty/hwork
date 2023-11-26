import React from "react";

import { Feature } from "../feature-item/Feature";

import features from "./features.module.css";

export const Features = () => {
  const featureItems = [
    {
      text: "Годовое ТО",
      color: "#22356F",
    },
    {
      text: "Выравнивание колес",
      color: "#0052C1",
    },
    {
      text: "Настройка переключателей",
      color: "#76B58B",
    },
  ];
  return (
    <section className={features.features}>
      <div className={features.container}>
        {featureItems.map((feature) => (
          <Feature text={feature.text} color={feature.color} />
        ))}
      </div>
    </section>
  );
};
