import React from "react";
import { SliderScala } from "../../../../index";
import { scalas } from "./SliderScala.config";

export default {
  title: "ControlElements/Slider/SubComponents/SliderScala",
  component: SliderScala,
  parameters: {
    docs: {
      description: {
        component:
          "Slider Component <br/> Expects one <code>&lt;Slider&gt;</code> Element as Child.",
      },
    },
  },
  argTypes: {
    scala: {
      description: "Slider Scala",
      table: {
        type: { summary: "string" },
      },
      options: Object.keys(scalas),
      control: { type: "select" },
    },
    min: {
      description: "Slider min",
      table: {
        type: { summary: "number" },
      },
      control: false,
    },
    max: {
      description: "Slider min",
      table: {
        type: { summary: "number" },
      },
      control: false,
    },
    children: {
      description: "Content",
      table: {
        type: { summary: "<Slider />" },
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

const Template = (args) => <SliderScala {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Celsius = Template.bind({});
Celsius.args = {
  min: 8,
  max: 28,
  scala: "celsius",
};
