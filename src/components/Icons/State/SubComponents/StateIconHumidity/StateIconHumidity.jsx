import React from "react";
import { colorClasses } from "./StateIconHumidity.config";

export function StateIconHumidity({ state, colorClass }) {
  state = Math.max(0, state);
  state = Math.min(state, 100);
  state = (state / 100).toFixed(2);

  let { outline, base, fill } =
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
        d='M4 23C4 26.866 7.13401 30 11 30H33C36.866 30 40 26.866 40 23C40 19.134 36.866 16 33 16C32.1655 16 31.3651 16.146 30.6229 16.4139C29.5118 12.7038 26.0717 10 22 10C17.9283 10 14.4882 12.7038 13.3771 16.4139C12.6349 16.146 11.8345 16 11 16C7.13401 16 4 19.134 4 23Z'
        fill='white'
      />
      <path
        className={`fill-current ${outline}`}
        d='M22 11C18.3822 11 15.3229 13.4022 14.335 16.7008L14.0318 17.7134L13.0375 17.3545C12.4027 17.1254 11.7171 17 11 17C7.68629 17 5 19.6863 5 23C5 26.3137 7.68629 29 11 29H33C36.3137 29 39 26.3137 39 23C39 19.6863 36.3137 17 33 17C32.2829 17 31.5973 17.1254 30.9625 17.3545L29.9682 17.7134L29.665 16.7008C28.6771 13.4022 25.6178 11 22 11ZM12.7507 15.1924C14.2482 11.5589 17.8242 9 22 9C26.1758 9 29.7518 11.5589 31.2493 15.1924C31.8134 15.0664 32.3994 15 33 15C37.4183 15 41 18.5817 41 23C41 27.4183 37.4183 31 33 31H11C6.58172 31 3 27.4183 3 23C3 18.5817 6.58172 15 11 15C11.6006 15 12.1866 15.0664 12.7507 15.1924Z'
        fill='#0B0B1C'
      />

      <g>
        <g
          transform={`translate(${10 - 10 * state} ${10 - 10 * state}) scale(${
            0.5 + 0.5 * state
          })`}>
          <path
            className={`fill-current ${outline}`}
            d='M30 36.4C30 40.816 26.4183 44.4 22 44.4C17.5817 44.4 14 40.816 14 36.4C14 29.7726 22 20.4 22 20.4C22 20.4 30 29.7726 30 36.4Z'
            fill='#0B0B1C'
          />
          <path
            className={`fill-current ${base}`}
            d='M28 36C28 39.312 25.3137 42 22 42C18.6863 42 16.0001 39.312 16.0001 36C16.0001 31.0295 22 24.0001 22 24.0001C22 24.0001 28 31.0295 28 36Z'
            fill='white'
          />
          <path
            style={{ opacity: state }}
            className={`fill-current ${fill}`}
            d='M28 36C28 39.312 25.3137 42 22 42C18.6863 42 16.0001 39.312 16.0001 36C16.0001 31.0295 22 24.0001 22 24.0001C22 24.0001 28 31.0295 28 36Z'
            fill='#707FDC'
          />
        </g>
      </g>
    </svg>
  );
}

StateIconHumidity.defaultProps = {
  state: 25,
  colorClass: "default",
};
