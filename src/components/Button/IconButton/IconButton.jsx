import React from "react";

import { Text, SystemIconContainer, SystemIcon } from "../../index";

export function IconButton({ type, children, callback }) {
  return (
    <button
      onClick={callback}
      className={`flex gap-sm items-center m-sm pl-md pr-sm py-xs rounded-sm bg-black hover:bg-gray-500 active:bg-gray-700 border border-black focus:outline-none ring-width-0.5 ring-offset-2 ring-black focus:ring`}>
      <Text colorClass='white'>{children}</Text>
      <SystemIconContainer>
        <SystemIcon colorClass='light' type={type} />
      </SystemIconContainer>
    </button>
  );
}

IconButton.defaultProps = {
  children: "Button Text",
  type: "close",
  callback: () => {},
};
