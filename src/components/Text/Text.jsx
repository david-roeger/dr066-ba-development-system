import React from "react";
import { colorClasses } from "./Text.config";

export function Text({ colorClass, size, children }) {
  let textStyle = "";
  if (size === "sm") {
    textStyle = "text-sm leading-sm";
  } else if (size === "xl") {
    textStyle = "text-xl leading-xl";
  } else if (size === "base") {
    textStyle = "text-base leading-base";
  }
  return (
    <span className={`${textStyle} ${colorClasses[colorClass]}`}>
      {children}
    </span>
  );
}

Text.defaultProps = {
  colorClass: "black",
  size: "base",
  children: "Text",
};
