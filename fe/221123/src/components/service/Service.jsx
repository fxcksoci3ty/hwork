import React from "react";

import service from "./service.module.css";

export const Service = () => {
  return (
    <section className={service.service}>
      <div className={service.container}>
        <div className={service.content}>
          <p className={service.text}>
            Приехав к нам однажды, многие наши клиенты становятся постоянными, а
            часть из них даже друзьями.
          </p>
          <p className={service.text}>
            А также в нашей мастерской можно отремонтировать электросамокат и
            электровелосипед.
          </p>
        </div>
      </div>
    </section>
  );
};
