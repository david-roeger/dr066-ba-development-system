import React from "react";
import { UpDown } from "../../../../index";
import { colorClasses } from "./UpDown.config";

export default {
  title: "ControlElements/UpDown/SubComponents/UpDown",
  component: UpDown,
  parameters: {
    docs: {
      description: {
        component:
          "UpDown Component <br/> Must be wrapped in <code>&lt;UpDownElement&gt;</code> Component.",
      },
    },
  },
  argTypes: {
    state: {
      description: "UpDown direction",
      table: {
        type: { summary: "number" },
      },
      options: [0, 1],
      control: {
        type: "radio",
      },
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
    active: {
      description: "Button active",
      table: {
        type: { summary: "boolean" },
      },
      control: {
        type: "boolean",
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

const Template = (args) => <UpDown {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Zwave = Template.bind({});
Zwave.args = {
  colorClass: "zwave",
};

export const Enocean = Template.bind({});
Enocean.args = {
  colorClass: "enocean",
};

export const Zigbee = Template.bind({});
Zigbee.args = {
  colorClass: "zigbee",
};
