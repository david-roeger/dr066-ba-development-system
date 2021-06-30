import React from "react";
import { colorClasses } from "./StateIconGarage.config";

export function StateIconGarage({ state, colorClass }) {
  state = Math.max(0, state);
  state = Math.min(state, 100);
  state = (state / 100).toFixed(2);

  let { outline, base, fillLight } =
    colorClasses[colorClass] || colorClasses.default;

  return (
    <svg
      width='44'
      height='46'
      viewBox='0 0 44 46'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        className={`fill-current ${base}`}
        d='M22 6L39 18.5499V40H35V19.5713H9V40H5V17.5284L22 6Z'
        fill='white'
      />
      <path
        className={`fill-current ${outline}`}
        d='M38 19.3494V38.9865H34V41H38C39.1046 41 40 40.0985 40 38.9865V19.3494C40 18.7222 39.7097 18.1309 39.2149 17.75L23.1912 5.41405C22.4966 4.87928 21.5374 4.86084 20.8229 5.36853L4.84663 16.7219C4.31573 17.0991 4 17.7126 4 18.3668V38.9865C4 40.0985 4.89543 41 6 41H10V38.9865H6V18.3668L21.9763 7.01347L38 19.3494Z'
        fill='#3A3A3A'
      />

      <rect
        className={`fill-current ${fillLight}`}
        x='10'
        y='21'
        width='24'
        height={18 - 18 * state}
        fill='#DADDE3'
      />

      <rect
        className={`fill-current ${outline}`}
        x='10'
        y='19'
        width='24'
        height='2'
        fill='#3A3A3A'
      />
      <rect
        className={`fill-current ${outline}`}
        x='10'
        y={Math.max(19, 24 - 20 * state)}
        width='24'
        height='2'
        fill='#3A3A3A'
      />
      <rect
        className={`fill-current ${outline}`}
        x='10'
        y={Math.max(19, 29 - 20 * state)}
        width='24'
        height='2'
        fill='#3A3A3A'
      />
      <rect
        className={`fill-current ${outline}`}
        x='10'
        y={Math.max(19, 34 - 20 * state)}
        width='24'
        height='2'
        fill='#3A3A3A'
      />
      <rect
        className={`fill-current ${outline}`}
        x='10'
        y={39 - 20 * state}
        width='24'
        height='2'
        fill='#3A3A3A'
      />

      <path
        className={`fill-current ${outline}`}
        d='M8 21C8 19.8954 8.89543 19 10 19V19V41H8V21Z'
        fill='#3A3A3A'
      />
      <path
        className={`fill-current ${outline}`}
        d='M34 19V19C35.1046 19 36 19.8954 36 21V41H34V19Z'
        fill='#3A3A3A'
      />

      <rect
        className={`fill-current ${outline}`}
        x='10'
        y='19'
        width='24'
        height='2'
        fill='#3A3A3A'
      />
    </svg>
  );
}

StateIconGarage.defaultProps = {
  state: 25,
  colorClass: "default",
};
