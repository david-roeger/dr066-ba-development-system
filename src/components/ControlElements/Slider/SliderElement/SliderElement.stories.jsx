import React from "react";
import { SliderElement } from "../../../index";

export default {
  title: "ControlElements/Slider/SliderElement",
  component: SliderElement,
  parameters: {
    docs: {
      description: {
        component:
          "Slider Element <br/> Expects one <code>&lt;SliderScale&gt;</code> Element as Child.",
      },
    },
  },
  argTypes: {
    attribute: {
      description: "Attribute Name",
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    children: {
      description: "Content",
      table: {
        type: { summary: "<SliderScala><Slider /></SliderScala>" },
      },
      type: {
        required: true,
      },
      control: {
        type: null,
      },
    },
  },
};

const Template = (args) => <SliderElement {...args} />;

export const Default = Template.bind({});
Default.args = {};
