import React from "react";
import { DeviceIconContainer } from "../../../index";
import { Default as DeviceIcon } from "../SubComponents/DeviceIcon/DeviceIcon.stories";

export default {
  component: DeviceIconContainer,
  title: "Icons/Device/DeviceIconContainer",
  parameters: {
    docs: {
      description: {
        component:
          "Container Component for Device Icons. <br> Expects one <code>&lt;DeviceIcon&gt;</code> Element as Child.",
      },
    },
  },
  argTypes: {
    children: {
      description: "Device Icon Component",
      type: {
        required: true,
      },
      table: {
        type: { summary: "<DeviceIcon/>" },
      },
      control: {
        type: null,
      },
    },
  },
};

const Template = (args) => <DeviceIconContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <DeviceIcon {...DeviceIcon.args} />,
};
