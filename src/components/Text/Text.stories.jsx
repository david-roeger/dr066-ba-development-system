import React from "react";
import { Text } from "../index";
import { colorClasses } from "./Text.config";

export default {
  component: Text,
  title: "Text",
  argTypes: {
    colorClass: {
      description: "Text Color",
      table: {
        type: {
          summary: "string",
        },
      },
      options: colorClasses,
    },
    size: {
      description: "Text Size",
      table: {
        type: {
          summary: "string",
        },
      },
      options: ["sm", "base", "xl"],
      control: {
        type: "radio",
      },
    },
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
  },
};

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const sm = Template.bind({});
sm.args = {
  size: "sm",
};

export const xl = Template.bind({});
xl.args = {
  size: "xl",
};
