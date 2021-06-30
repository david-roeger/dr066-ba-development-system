import React from "react";
import { ToggleScala } from "../../../../index";
import { scalas } from "./ToggleScala.config";

export default {
  title: "ControlElements/Toggle/SubComponents/ToggleScala",
  component: ToggleScala,
  parameters: {
    docs: {
      description: {
        component:
          "ToggleScala Component <br/> Expects one <code>&lt;Toggle&gt;</code> Element as Child.",
      },
    },
  },
  argTypes: {
    scala: {
      description: "Toggle Scala",
      table: {
        type: { summary: "string" },
      },
      options: Object.keys(scalas),
      control: { type: "select" },
    },
    children: {
      description: "Content",
      table: {
        type: { summary: "<Toggle />" },
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

const Template = (args) => <ToggleScala {...args} />;

export const Default = Template.bind({});
Default.args = {};
