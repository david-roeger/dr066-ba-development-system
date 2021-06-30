import React from "react";
import { UpDownElement } from "../../../index";
import { colorClasses } from "./UpDownElement.config";

export default {
  title: "ControlElements/UpDown/UpDownElement",
  component: UpDownElement,
  parameters: {
    docs: {
      description: {
        component: "UpDown Element <br/>",
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
    state: {
      description: "UpDown direction (0/1)",
      table: {
        type: { summary: "number" },
      },
      control: false,
    },
    colorClass: {
      description: "Color Class (from config)",
      table: {
        type: { summary: "string" },
      },
      options: Object.keys(colorClasses),
      control: {
        type: "select",
      },
    },
    callback: {
      description: "Callback function for onClick Event.",
      type: {
        required: true,
      },
      table: {
        type: { summary: "function(value) {}" },
      },
      control: false,
    },
  },
};

const Template = (args) => <UpDownElement {...args} />;

export const Default = Template.bind({});
Default.args = {};
