import React from "react";
import { Text, Toggle } from "../../../../index";
import { scalas } from "./ToggleScala.config";

export function ToggleScala({ scala, children }) {
  let scalaText = scalas[scala] || scalas.onOff;
  return (
    <div className='flex gap-xs align-center items-center'>
      <Text size='sm' colorClass='gray-500'>
        {scalaText[0]}
      </Text>
      {children}
      <Text size='sm' colorClass='gray-500'>
        {scalaText[1]}
      </Text>
    </div>
  );
}

ToggleScala.defaultProps = {
  scala: "onOff",
  children: <Toggle />,
};
