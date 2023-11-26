import React from "react";

import button from "./button.module.css";

export const Button = (props) => {
  return (
    <a href={props.href} className={button.button}>
      {props.text}
    </a>
  );
};
