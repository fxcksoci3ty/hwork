import React from "react";

import aboutUsImage from "../../images/about-us.jpg";

import aboutUs from "./aboutUs.module.css";

export const AboutUs = () => {
  return (
    <section className={aboutUs.aboutUs}>
      <div className={aboutUs.container}>
        <div className={aboutUs.content}>
          <h2 className={aboutUs.title}>Что мы предлагаем</h2>
          <p className={aboutUs.description}>
            В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех
            его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и
            дорогого ремонта. Все работы выполняем качественно и с душой.
          </p>
        </div>
        <div>
          <img className={aboutUs.image} src={aboutUsImage} alt="Bikes" />
        </div>
      </div>
    </section>
  );
};
