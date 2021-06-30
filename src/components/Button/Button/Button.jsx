import React from "react";

import { Text } from "../../index";

export function Button({ children, callback }) {
  return (
    <button
      onClick={callback}
      className={`m-sm px-md py-xs rounded-sm bg-black hover:bg-gray-500 active:bg-gray-700 border border-black focus:outline-none ring-width-0.5 ring-offset-2 ring-black focus:ring`}>
      <Text colorClass='white'>{children}</Text>
    </button>
  );
}

Button.defaultProps = {
  children: "Button Text",
  callback: () => {},
};
