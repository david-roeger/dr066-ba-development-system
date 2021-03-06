import React from "react";
import { Text, SliderScala, Slider } from "../../../index";

export function SliderElement({ attribute, children }) {
  return (
    <div className='flex gap-sm align-center items-center'>
      <div className='hidden md:block'>
        <Text>{attribute}</Text>
        <Text>:</Text>
      </div>
      <div className='flex-grow'>{children}</div>
    </div>
  );
}

SliderElement.defaultProps = {
  attribute: "Attribute",
  children: (
    <SliderScala>
      <Slider />
    </SliderScala>
  ),
};
