import React from "react";
import { Value } from "../../../../index";

export default {
  title: "ControlElements/Value/SubComponents/Value",
  component: Value,
  parameters: {
    docs: {
      description: {
        component:
          "Value Component <br/> Must be wrapped in <code>&lt;ValueElement&gt;</code> Component.",
      },
    },
  },
  argTypes: {
    state: {
      description: "Value",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "text",
      },
    },
    disabled: {
      description: "Disable Value",
      table: {
        type: { summary: "boolean" },
      },
      control: {
        type: "boolean",
      },
    },
  },
};

const Template = (args) => <Value {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: "Value",
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: "Value",
  disabled: true,
};
