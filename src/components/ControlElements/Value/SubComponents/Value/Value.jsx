import React from "react";

import { Text } from "../../../../index";

export function Value({ state, disabled }) {
  return (
    <p>
      <Text colorClass={disabled ? "gray-300" : "black"}>{state}</Text>
    </p>
  );
}

Value.defaultProps = {
  state: "",
  disabled: false,
};
