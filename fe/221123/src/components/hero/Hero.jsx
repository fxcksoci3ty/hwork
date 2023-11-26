import React from "react";

import heroImage from "../../images/hero-image.svg";

import hero from "./hero.module.css";

export const Hero = () => {
  return (
    <section className={hero.hero}>
      <div className={hero.container}>
        <div className={hero.content}>
          <h1 className={hero.title}>Веломастерская “Велозар”</h1>
          <p className={hero.description}>
            Мы, мастера веломастерской «Велозар», как раз те самые счастливые
            люди, которые смогли превратить свое увлечение и хобби в профессию.
            Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил
            Вам только радость и удовольствие от езды.
          </p>
        </div>
        <div>
          <img src={heroImage} alt="A dinosaur on a bike" />
        </div>
      </div>
    </section>
  );
};
