import React from "react";
import {
  Navigation,
  NavIconButtonWrapper,
  NavIconButton,
  Grid,
} from "../../index";

export default {
  component: Navigation,
  title: "Navigation/Navigation",
  decorators: [(Story) => <Grid full>{Story()}</Grid>],
  parameters: {
    docs: {
      description: {
        component:
          "Renders <code>&lt;NavIconButtonWrapper&gt;</code> elements inside Container. <br/> Default Values are defined in config file",
      },
    },
    layout: "fullscreen",
  },
  argTypes: {
    children: {
      description: "&lt;NavIconButtonWrapper /&gt;",
      type: {
        required: true,
      },
      table: {
        type: { summary: "Element Collection" },
        default: "-",
      },
      control: {
        control: false,
      },
    },
  },
};

const Template = (args) => <Navigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [
    <NavIconButtonWrapper key={0}>
      <NavIconButton active></NavIconButton>
    </NavIconButtonWrapper>,
    <NavIconButtonWrapper key={1}>
      <NavIconButton></NavIconButton>
    </NavIconButtonWrapper>,
    <NavIconButtonWrapper key={2}>
      <NavIconButton></NavIconButton>
    </NavIconButtonWrapper>,
    <NavIconButtonWrapper key={3}>
      <NavIconButton></NavIconButton>
    </NavIconButtonWrapper>,
    <NavIconButtonWrapper key={4}>
      <NavIconButton></NavIconButton>
    </NavIconButtonWrapper>,
  ],
};
