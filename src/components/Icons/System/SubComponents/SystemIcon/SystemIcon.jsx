import React from "react";

import { types, colorClasses } from "./SystemIcon.config";

export function SystemIcon({ type, colorClass }) {
  let src = "/";
  if (types.includes(type) != -1 && colorClasses.includes(colorClass) != -1) {
    src = `type=${type}, colorClass=${colorClass}.svg`;
  }
  return <img src={`/systemIcons/${src}`} />;
}

SystemIcon.defaultProps = {
  type: "close",
  colorClass: "default",
};
