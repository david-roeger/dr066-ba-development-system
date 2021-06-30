import React from "react";
import { NavIconButtonWrapper } from "../../../index";

export default {
  component: NavIconButtonWrapper,
  title: "Navigation/Subcomponents/NavIconButtonWrapper",
  parameters: {
    docs: {
      description: {
        component:
          "Container Component for NavIconButton. <br> Expects one <code>&lt;NavIconButton&gt;</code> or <code>&lt;Link&gt;</code> Element as Child.",
      },
    },
  },
  argTypes: {
    children: {
      description: "&lt;NavIconButton&gt;...&lt;/NavIconButton&gt;",
      type: {
        required: true,
      },
      table: {
        type: { summary: "Element" },
      },
      control: false,
    },
  },
};

const Template = (args) => <NavIconButtonWrapper {...args} />;

export const Default = Template.bind({});
