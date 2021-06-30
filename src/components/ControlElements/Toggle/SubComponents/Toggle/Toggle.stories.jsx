import React from "react";
import { Toggle } from "../../../../index";
import { colorClasses } from "./Toggle.config";

export default {
  title: "ControlElements/Toggle/SubComponents/Toggle",
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component:
          "Toggle Component <br/> Must be wrapped in <code>&lt;ToggleScala&gt;</code> Component.",
      },
    },
  },
  argTypes: {
    state: {
      description: "Toggle state",
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
    disabled: {
      description: "Disable Toggle",
      table: {
        type: { summary: "boolean" },
      },
      control: {
        type: "boolean",
      },
    },
    callback: {
      description: "Callback function for onChange Event.",
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

const Template = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

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
