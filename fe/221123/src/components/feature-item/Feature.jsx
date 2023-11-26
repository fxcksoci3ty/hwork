import React from "react";

import feature from "./feature.module.css";

export const Feature = (props) => {
  return (
    <div
      style={{ backgroundColor: `${props.color}` }}
      className={feature.feature}
    >
      <div className={feature.line}></div>
      <h3 className={feature.title}>{props.text}</h3>
    </div>
  );
};
