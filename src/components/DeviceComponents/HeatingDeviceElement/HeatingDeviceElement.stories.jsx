import React from "react";
import { HeatingDeviceElement } from "../../index";

export default {
  title: "DeviceComponents/HeatingDeviceElement",
  component: HeatingDeviceElement,
  parameters: {
    docs: {
      description: {
        component: "HeatingDeviceElement Component.",
      },
    },
  },
  argTypes: {
    children: {
      description: "Text",
      type: {
        required: true,
      },
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "text",
      },
    },
    callback: {
      description: "Callback function for onClick Event",
      type: {
        required: true,
      },
      table: {
        type: { summary: "function" },
      },
      control: false,
    },
  },
};

const Template = (args) => <HeatingDeviceElement {...args} />;

export const Default = Template.bind({});
Default.args = {};
