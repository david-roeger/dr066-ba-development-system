import React from "react";
import { IconButton } from "../../index";

import { types } from "../../Icons/System/SubComponents/SystemIcon/SystemIcon.config";

export default {
  title: "Button/IconButton",
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component: "Component.",
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
    type: {
      description: "Icon type",
      table: {
        type: { summary: "string" },
      },
      options: types,
      control: { type: "select" },
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

const Template = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
  callback: () => alert("click"),
};
