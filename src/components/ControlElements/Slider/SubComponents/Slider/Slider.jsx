import React, { useState } from "react";
import "./Slider.css";
import { colorClasses } from "./Slider.config";

import tokens from "dr066-ba-design-token-builder/build/web/tokens";

export function Slider({ state, colorClass, disabled, min, max, callback }) {
  let colors = tokens.colors;
  let c = colorClasses[colorClass] || colorClasses.Default;

  let colorsComputed = {};
  if (disabled) {
    state = min + (max - min) / 2;
    colorsComputed = {
      outline: colors["gray-300"].value,
      fill: colors["white"].value,
      base: colors["white"].value,
    };
  } else {
    for (const key in c) {
      let property = c[key];
      let index = property.indexOf("-");
      property = property.slice(index + 1, property.length);
      colorsComputed[key] = colors[property]?.value;
    }
  }
  console.log(colorsComputed);

  const [sliderState, setSliderState] = useState(state);
  let percent = (100 / (max - min)) * (sliderState - min);

  function handleInput(value) {
    setSliderState(parseInt(value));
  }

  function handleUpdate(value) {
    callback(parseInt(value));
  }

  return (
    <input
      style={{
        background: `linear-gradient(to right, ${colorsComputed.fill} 0%, ${colorsComputed.fill} ${percent}%,${colorsComputed.base} ${percent}%, ${colorsComputed.base} 100%)`,
        "--border-color": colorsComputed.outline,
        "--fill-color": colorsComputed.fill,
        "--base-color": colorsComputed.base,
      }}
      className='slider block min-w-full my-sm cursor-pointer'
      type='range'
      value={sliderState}
      min={min}
      max={max}
      disabled={disabled}
      onInput={(e) => handleInput(e.target.value)}
      onChange={(e) => handleUpdate(e.target.value)}
    />
  );
}

Slider.defaultProps = {
  min: 0,
  max: 100,
  state: 20,
  colorClass: "Default",
  disabled: false,
  callback: (value) => {},
};
