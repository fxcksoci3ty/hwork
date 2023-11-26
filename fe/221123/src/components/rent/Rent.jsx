import React from "react";

import rent from "./rent.module.css";

import rentImage from "../../images/rent-image.jpg";

export const Rent = () => {
  return (
    <section>
      <div className={rent.container}>
        <div>
          <img className={rent.image} src={rentImage} alt="A lot of different bikes" />
        </div>
        <div className={rent.content}>
          <h2>Прокат велосипедов</h2>
          <p>
            У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в
            прекрасном парке!
          </p>
        </div>
      </div>
    </section>
  );
};
