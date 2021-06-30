import React from "react";
import { Text, NavIcon, NavIconButton } from "../../../index";

export function NavIconButtonWrapper({ children }) {
  return <div className='block h-auto select-none'>{children}</div>;
}

NavIconButtonWrapper.defaultProps = {
  children: (
    <NavIconButton>
      <NavIcon></NavIcon>,<Text colorClass='white'>Home</Text>
    </NavIconButton>
  ),
};
