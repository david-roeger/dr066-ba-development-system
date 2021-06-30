import React from "react";
import { SystemIconContainer } from "../../../index";
import { Default as SystemIcon } from "../SubComponents/SystemIcon/SystemIcon.stories";

export default {
  component: SystemIconContainer,
  title: "Icons/System/SystemIconContainer",
  parameters: {
    docs: {
      description: {
        component:
          "Container Component for System Icons. <br> Expects one <code>&lt;SystemIcon&gt;</code> Element as Child.",
      },
    },
  },
  argTypes: {
    children: {
      description: "System Icon Component",
      type: {
        required: true,
      },
      table: {
        type: { summary: "<SystemIcon/>" },
      },
      control: {
        type: null,
      },
    },
  },
};

const Template = (args) => <SystemIconContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <SystemIcon {...SystemIcon.args} />,
};
